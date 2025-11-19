import { PrismaClient } from '../src/generated/client/client'

const prisma = new PrismaClient()

async function main() {
  // 1. Clean up existing data
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.product.deleteMany()
  await prisma.user.deleteMany()
  await prisma.aIInsight.deleteMany()

  console.log('Deleted existing data.')

  // 2. Create Users
  const admin = await prisma.user.create({
    data: {
      email: 'admin@kokoerp.com',
      name: 'Admin User',
      role: 'ADMIN',
    },
  })

  const manager = await prisma.user.create({
    data: {
      email: 'manager@kokoerp.com',
      name: 'Manager User',
      role: 'MANAGER',
    },
  })

  console.log('Created users.')

  // 3. Create Products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'High-Performance Laptop',
        description: 'Latest gen processor, 32GB RAM, 1TB SSD',
        sku: 'TECH-LAP-001',
        price: 1299.99,
        stock: 50,
        category: 'Electronics',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Ergonomic Office Chair',
        description: 'Mesh back, adjustable lumbar support',
        sku: 'FURN-CHR-002',
        price: 249.50,
        stock: 120,
        category: 'Furniture',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Wireless Noise-Canceling Headphones',
        description: 'Active noise cancellation, 30h battery life',
        sku: 'TECH-AUD-003',
        price: 199.00,
        stock: 75,
        category: 'Electronics',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Smart Coffee Maker',
        description: 'WiFi enabled, app control, precision temp',
        sku: 'HOME-APP-004',
        price: 149.99,
        stock: 30,
        category: 'Home',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Mechanical Keyboard',
        description: 'RGB Backlit, Cherry MX Blue switches',
        sku: 'TECH-ACC-005',
        price: 89.99,
        stock: 200,
        category: 'Electronics',
      },
    }),
  ])

  console.log('Created products.')

  // 4. Create Orders
  await prisma.order.create({
    data: {
      userId: admin.id,
      status: 'DELIVERED', // Note: Enum is DELIVERED in schema, let's fix this to match schema
      total: 1498.99,
      items: {
        create: [
          {
            productId: products[0].id,
            quantity: 1,
            price: 1299.99,
          },
          {
            productId: products[2].id,
            quantity: 1,
            price: 199.00,
          },
        ],
      },
    },
  })

  await prisma.order.create({
    data: {
      userId: manager.id,
      status: 'PENDING',
      total: 499.00,
      items: {
        create: [
          {
            productId: products[1].id,
            quantity: 2,
            price: 249.50,
          },
        ],
      },
    },
  })

  // Create a few more random orders
  await prisma.order.create({
    data: {
      userId: admin.id,
      status: 'PROCESSING',
      total: 89.99,
      items: {
        create: [
          {
            productId: products[4].id,
            quantity: 1,
            price: 89.99,
          }
        ]
      }
    }
  })

  console.log('Created orders.')

  // 5. Create AI Insights
  await prisma.aIInsight.create({
    data: {
      type: 'SALES_FORECAST',
      content: JSON.stringify({
        summary: 'Sales projected to increase by 15% next month due to seasonal demand for Electronics.',
        confidence: 0.89,
        trend: 'UP',
      }),
    },
  })

  await prisma.aIInsight.create({
    data: {
      type: 'INVENTORY_ALERT',
      content: JSON.stringify({
        summary: 'Low stock alert for "Smart Coffee Maker". Reorder recommended within 3 days.',
        productId: products[3].id,
        currentStock: 30,
        recommendedReorder: 50,
      }),
    },
  })

  console.log('Created AI insights.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
