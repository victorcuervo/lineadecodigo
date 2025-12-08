---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3PUKME%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2Ba2LeLA8WZnwHkpxz49tPVVufxSmuBY2VNjx7pDDbwIhAI7R6tXhjlefyO22mwrLHqxN3p01eAryjHSQghkRzNDUKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHvsKVWVjWTbHJJw8q3ANzAepngE7VKEqbF4FWAn5sLAL9McYa7xL0WBsM6pXWpktIZ%2FCDYupTNUvfjEdDjyEIUcJ0Y%2F62ioSaieRj71yPDeWow0w0%2Fl251g0KyoMqYxaTDuyp6bRshhJ003SMPx%2FxyyJJjCAlcYnZWMGybRmWa7xP1fUbAvO%2B%2FQRMY2sa%2BneL9yGWU0YtR0Ox1RaVDFuMWTBa18oojIIfbywyEFI2Su6Z8ay4%2FyHoNMH4d%2FzGb3jghfXEXV7qZNhftVi73MUiw46IuK7vjl1BcnMOr5JI9L6tezbMFN0bKFf8Z5y9UuMuabVcvKsezf%2BGqF5WBr5hGMFuRhqb3X3nm%2FNNE3eOJEYClf5scoa0vrPXWOFRIqS7HV2v1B%2BHGgE2fP04c31ByNgTrWgGSDOixxIePAozVukVbp8Y932uJHjXj8xCZeTRpYjqG44wb4su%2FgUYeILtF7cpDOdBwLF8dXozSbxhh0YLc%2F%2BM91FJsvIZg%2BCUn8DhfTROtk3ogT8mI%2BGoZPdedaZel8myI7rUFyN2iCfNzsULM6yci3su6tAi2o5ZXEAftbkdWm%2BhIEeiByJVFGOTjHrBSi7xUInOWbXz%2Bum2bSSYQN0CZ0UsTMbTgaQlnWka%2FEQePGhyFPNXADDh7tjJBjqkAfiJRZrPw0UC4cjfzq4T5CoOW8trjwdDsI2iDEOReTig4%2B2GcMyVKK6ZJ9CfZMqKel3IvyyvFscVI%2BgygPz1nAKeUkaPMECPBZYcGbyA4gIASYrGVwjEwgTKiOGla5jqHmUp9B8FwByYBUWiAQMb%2FV8%2BLcsQ6kQvbJithV2E8ftfvrHrcr8mC2M1M7MNEV7L2KMSTYHCYPj3Dkxqd%2B%2FfUPxqBwUu&X-Amz-Signature=562f5b3ab5fc15eabfb15569aac860afbda23eff7f999686a4b569e99b5b8873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3PUKME%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2Ba2LeLA8WZnwHkpxz49tPVVufxSmuBY2VNjx7pDDbwIhAI7R6tXhjlefyO22mwrLHqxN3p01eAryjHSQghkRzNDUKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHvsKVWVjWTbHJJw8q3ANzAepngE7VKEqbF4FWAn5sLAL9McYa7xL0WBsM6pXWpktIZ%2FCDYupTNUvfjEdDjyEIUcJ0Y%2F62ioSaieRj71yPDeWow0w0%2Fl251g0KyoMqYxaTDuyp6bRshhJ003SMPx%2FxyyJJjCAlcYnZWMGybRmWa7xP1fUbAvO%2B%2FQRMY2sa%2BneL9yGWU0YtR0Ox1RaVDFuMWTBa18oojIIfbywyEFI2Su6Z8ay4%2FyHoNMH4d%2FzGb3jghfXEXV7qZNhftVi73MUiw46IuK7vjl1BcnMOr5JI9L6tezbMFN0bKFf8Z5y9UuMuabVcvKsezf%2BGqF5WBr5hGMFuRhqb3X3nm%2FNNE3eOJEYClf5scoa0vrPXWOFRIqS7HV2v1B%2BHGgE2fP04c31ByNgTrWgGSDOixxIePAozVukVbp8Y932uJHjXj8xCZeTRpYjqG44wb4su%2FgUYeILtF7cpDOdBwLF8dXozSbxhh0YLc%2F%2BM91FJsvIZg%2BCUn8DhfTROtk3ogT8mI%2BGoZPdedaZel8myI7rUFyN2iCfNzsULM6yci3su6tAi2o5ZXEAftbkdWm%2BhIEeiByJVFGOTjHrBSi7xUInOWbXz%2Bum2bSSYQN0CZ0UsTMbTgaQlnWka%2FEQePGhyFPNXADDh7tjJBjqkAfiJRZrPw0UC4cjfzq4T5CoOW8trjwdDsI2iDEOReTig4%2B2GcMyVKK6ZJ9CfZMqKel3IvyyvFscVI%2BgygPz1nAKeUkaPMECPBZYcGbyA4gIASYrGVwjEwgTKiOGla5jqHmUp9B8FwByYBUWiAQMb%2FV8%2BLcsQ6kQvbJithV2E8ftfvrHrcr8mC2M1M7MNEV7L2KMSTYHCYPj3Dkxqd%2B%2FfUPxqBwUu&X-Amz-Signature=607591f9d19ec685f483be4a36ed836f06ccf296013a61caef35cfc6cace304c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

