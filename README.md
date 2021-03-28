# Weather

This is my first serious encounter of both Node.js and React so, there has been a lot of Googling, and that might be one reason that I could not make more with it in the allotted time.


## Running it 

To start the application, first run `make install` and the `make up`.
The application will be accessible on `localhost:3000`.

To stop the application, run `make down`


## Some Potential Improvements.

* __Graphical Interface__ - The application is not very beautiful as it is now. Some time can be spent adding som color and icons as well as working on the user experience to make it more readable and clearer.
* __Agnostic Weather service__ - I would like to extract the SMHI service behind an interface and instead let the application be agnostic of the implementation. This would make it easier to add another weather service besides SMHI, or to use multiple services simultaneously.
* __Database__ - There is a hard-coded list of locations at the moment. It would be nice to move these into a database for storage.