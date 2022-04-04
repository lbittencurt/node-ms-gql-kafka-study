import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  // @UseGuards(AuthorizationGuard)
  @Query(() => String)
  hello() {
    return 'hello world'; //this.prisma.customer.findMany();
  }
}
