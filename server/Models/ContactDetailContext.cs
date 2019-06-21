using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBook.Models
{
    public class ContactDetailContext:DbContext
    {
        public ContactDetailContext(DbContextOptions<ContactDetailContext> options):base(options)
        {

        }

        public DbSet<ContactDetail> ContactDetail { get; set; }
    }
}
