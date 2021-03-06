﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AddressBook.Models;
using System.Net;

namespace AddressBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactDetailController : ControllerBase
    {
        private readonly ContactDetailContext _context;

        public ContactDetailController(ContactDetailContext context)
        {
            _context = context;
        }



        // GET: api/ContactDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactDetail>>> GetContactDetail()
        {
            
                return await _context.ContactDetail.ToListAsync();
        }

        // GET: api/ContactDetail/search/keyword
        [HttpGet("Search/{keyword}")]
        public IActionResult Search(string keyword)
        {

           
            
            var firstname = _context.ContactDetail.Where(p => p.FirstName.Contains(keyword)).ToList();
            var lastname = _context.ContactDetail.Where(p => p.LastName.Contains(keyword)).ToList();
            var address = _context.ContactDetail.Where(p => p.Address.Contains(keyword)).ToList();

            if (firstname.Count > 0)
            {
                return Ok(firstname);
            }
            else if (lastname.Count > 0)
            {
                return Ok(lastname);
            }
            else if (address.Count > 0)
            {
                return Ok(address);
            }
            else return BadRequest();
            
        }

        // GET: api/ContactDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactDetail>> GetContactDetail(int id)
        {
            var contactDetail = await _context.ContactDetail.FindAsync(id);

            if (contactDetail == null)
            {
                return NotFound();
            }

            return contactDetail;
        }

        // PUT: api/ContactDetail/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContactDetail(int id, ContactDetail contactDetail)
        {
            if (id != contactDetail.CTId)
            {
                return BadRequest();
            }

            var numberCheck = _context.ContactDetail.Where(u => u.PhoneNumber == contactDetail.PhoneNumber).FirstOrDefault();

            if (numberCheck != null)
            {
                return Conflict();
            }

            _context.Entry(contactDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private IActionResult Content(HttpStatusCode conflict, ContactDetail numberCheck)
        {
            throw new NotImplementedException();
        }

        // POST: api/ContactDetail
        [HttpPost]
        public async Task<ActionResult<ContactDetail>> PostContactDetail(ContactDetail contactDetail)
        {
            var numberCheck = _context.ContactDetail.Where(u => u.PhoneNumber == contactDetail.PhoneNumber).FirstOrDefault();

            if (numberCheck != null)
            {
                return Conflict();
            }

            _context.ContactDetail.Add(contactDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContactDetail", new { id = contactDetail.CTId }, contactDetail);
        }

        // DELETE: api/ContactDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ContactDetail>> DeleteContactDetail(int id)
        {
            var contactDetail = await _context.ContactDetail.FindAsync(id);
            if (contactDetail == null)
            {
                return NotFound();
            }

            _context.ContactDetail.Remove(contactDetail);
            await _context.SaveChangesAsync();

            return contactDetail;
        }

        private bool ContactDetailExists(int id)
        {
            return _context.ContactDetail.Any(e => e.CTId == id);
        }
    }
}
