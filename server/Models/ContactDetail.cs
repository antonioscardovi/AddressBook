using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBook.Models
{
    public class ContactDetail
    {
        [Key]
        public int CTId { get; set; }
        [Required]
        [Column(TypeName ="nvarchar(100)")]
        public string FirstName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Address { get; set; }
        [Required]
        [Phone]
        [Column(TypeName = "nvarchar(15)")]
        public string PhoneNumber { get; set; }
    }
}
