using System;
using System.Security.Cryptography;
using System.Text;

namespace Project2.Helpers
{
    public static class PasswordHelper
    {
        public static string EncryptPassword(string password)
        {
            using SHA256 sha256 = SHA256.Create();
            byte[] bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < bytes.Length; i++)
            {
                builder.Append(bytes[i].ToString("x2"));
            }
            return builder.ToString();
        }

        public static bool VerifyPassword(string password, string hashedPassword)
        {
            string encryptedPassword = EncryptPassword(password);
            return String.Equals(encryptedPassword, hashedPassword);
        }
    }
}
