using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpstLibrary_Admin.Models;

public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    [EmailAddress]
    [MaxLength(255)]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }

    [Required]
    [Display(Name = "First Name")]
    [MaxLength(100)]
    public string FirstName { get; set; }

    [Required]
    [Display(Name = "Last Name")]
    [MaxLength(100)]
    public string LastName { get; set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedAt { get; set; } = DateTime.Now;
}