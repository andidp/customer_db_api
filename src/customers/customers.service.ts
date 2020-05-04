import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './interfaces/create-customer.dto';
import { Customer } from '../entity/Customer';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}
  
  create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer();
    customer.firstName = createCustomerDto.firstName;
    customer.lastName = createCustomerDto.lastName;
    customer.email = createCustomerDto.email;
    customer.address = createCustomerDto.address;
    customer.phoneNumber = createCustomerDto.phoneNumber;
    customer.dateOfBirth = createCustomerDto.dateOfBirth;
    customer.city = createCustomerDto.city;
    customer.state = createCustomerDto.state;
    customer.postcode = createCustomerDto.postcode;

    return this.customerRepository.save(customer);

  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findOne(id: string): Promise<Customer> {
    return this.customerRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
