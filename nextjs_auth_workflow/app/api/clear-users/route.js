import { NextResponse } from 'next/server';
import connectToDatabase from '@/utils/mongodb';
import User from '@/app/models/User';

export async function DELETE() {
  try {
    await connectToDatabase();
    const result = await User.deleteMany({});
    console.log('✅ Cleared all users:', result.deletedCount);
    
    return NextResponse.json(
      { message: `Deleted ${result.deletedCount} users` },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Clear users error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}