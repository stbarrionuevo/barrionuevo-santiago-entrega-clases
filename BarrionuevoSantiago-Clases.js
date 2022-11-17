// >> Consigna: 
// 1) Declarar una clase Usuario

// 2) Hacer que Usuario cuente con los siguientes atributos:
// nombre: String
// apellido: String
// libros: Object[]
// mascotas: String[]
// Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.
// Hacer que Usuario cuente con los siguientes métodos:
// getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
// addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
// countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
// addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
// getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
// 4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos

class User {
    constructor(name , lastname , books , pets){
        this.name = name;
        this.lastname = lastname;
        this.books = books;
        this.pets = pets;
    }

    getFullName () {
        return(`The user's full name is ${this.name} ${this.lastname}`)
    };

    addMascota (pet) {
       this.pets.push(pet)
    }

    countMascotas ()  {
        return this.pets.length
    }

    addBook (name,author) {
      
       this.books.push({bookName : name , authorName : author})
        return `"${name}" written by ${author} has been successfully uploaded`
        
        }
        

    getBookNames () {
        let bookNames = this.books.map((bookName) => bookName.bookName)
        return bookNames
    }
}

const User1 = new User("Santiago" , "Barrionuevo",[{bookName:"El Gato Negro", authorName: "Edgar Allan Poe"}], ["Perro" , "Perra"])

console.log(User1.getFullName())
console.log(User1.addMascota("Conejo"))
console.log(User1.pets)
console.log(User1.countMascotas())
console.log(User1.addBook("1984","George Orwell"))
console.log(User1.addBook("Cuentos de la Selva","Horacio Quiroga"))
console.log(User1.books)
console.log(User1.getBookNames())


