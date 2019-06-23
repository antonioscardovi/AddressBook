using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBook.Models
{
    public static class DbInitializer
    {
        public static void Initialize(ContactDetailContext context)
        {
            // Look for any contacts.
            if (context.ContactDetail.Any())
            {
                return;   // DB has been seeded
            }

            var contacts = new ContactDetail[]
            {
            new ContactDetail{FirstName="Carson",LastName="Alexander",Address="19 Young Street",PhoneNumber="(252) 254-5528"},
            new ContactDetail{FirstName="Meredith",LastName="Alonso",Address="8099 Indian Spring St.",PhoneNumber="(681) 223-9988"},
            new ContactDetail{FirstName="Arturo",LastName="Anand",Address="31 Gates Ave.",PhoneNumber="(289) 737-8025"},
            new ContactDetail{FirstName="Gytis",LastName="Barzdukas",Address="122 Manhattan Drive",PhoneNumber="(962) 278-2843"},
            new ContactDetail{FirstName="Yan",LastName="Li",Address="2 Chapel Street",PhoneNumber="(903) 988-0725"},
            new ContactDetail{FirstName="Peggy",LastName="Justice",Address="22 Washington Street",PhoneNumber="(368) 268-3753"},
            new ContactDetail{FirstName="Laura",LastName="Norman",Address="8604 Briarwood St.",PhoneNumber="(770) 590-3857"},
            new ContactDetail{FirstName="Nino",LastName="Olivetto",Address="61 Military St.",PhoneNumber="(359) 868-3931"}
            };
            foreach (ContactDetail c in contacts)
            {
                context.ContactDetail.Add(c);
            }
            context.SaveChanges();

        }
    }
}
