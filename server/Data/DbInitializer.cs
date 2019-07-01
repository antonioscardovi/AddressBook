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
            new ContactDetail{FirstName="Carson",LastName="Alexander",Address="19 Young Street",PhoneNumber="(252)2545528"},
            new ContactDetail{FirstName="Meredith",LastName="Alonso",Address="8099 Indian Spring St.",PhoneNumber="(681)2239988"},
            new ContactDetail{FirstName="Arturo",LastName="Anand",Address="31 Gates Ave.",PhoneNumber="(289)7378025"},
            new ContactDetail{FirstName="Gytis",LastName="Barzdukas",Address="122 Manhattan Drive",PhoneNumber="(962)2782843"},
            new ContactDetail{FirstName="Yan",LastName="Li",Address="2 Chapel Street",PhoneNumber="(903)9880725"},
            new ContactDetail{FirstName="Peggy",LastName="Justice",Address="22 Washington Street",PhoneNumber="(368)2683753"},
            new ContactDetail{FirstName="Laura",LastName="Norman",Address="8604 Briarwood St.",PhoneNumber="(770)5903857"},
            new ContactDetail{FirstName="Nino",LastName="Olivetto",Address="61 Military St.",PhoneNumber="(359)8683931"},
            new ContactDetail{FirstName="Cary",LastName="Pope",Address="478 North Province",PhoneNumber="4259559798"},
            new ContactDetail{FirstName="Carl",LastName="Jandreau",Address="2842 Calvin Street",PhoneNumber="443-373-0735"},
            new ContactDetail{FirstName="Henry",LastName="Tanaka",Address="4772 White River Way",PhoneNumber="801-482-0999"},
            new ContactDetail{FirstName="Elinor",LastName="Nesbitt",Address="1845 Gregory Lane",PhoneNumber="502-487-2105"}
            };
            foreach (ContactDetail c in contacts)
            {
                context.ContactDetail.Add(c);
            }
            context.SaveChanges();

        }
    }
}
