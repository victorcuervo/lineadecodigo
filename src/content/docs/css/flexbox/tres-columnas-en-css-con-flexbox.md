---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A23GBVF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHN0MOUN6G6Zkm2h0VTU4uZBv8vXTG4m%2B2uJkxSNtqFoAiAcD0v%2F%2FpwRGrxYUdHQSo6T3VEOxOdUOAyglpEkQHy6ZyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQzo%2BIWZwCjzF4pqMKtwDOxHByvRCFgj%2FyqBdVM5G8y69RtHEnatfQGPLG4a72ALwnBimBsaDnT4CRhvy4t%2FYwdLC%2BiFpnw5%2BRfdiwox1MNLUaX%2FVz3I5Hu9HBAVEHI%2F%2F4yQMB%2FdBsRKyLwZtaY%2BPFdAG8jen%2Fv9aNJ2k%2FgeEBseG5d%2BNh90%2FDJxE9gD%2BbO%2BDzW%2B7MY%2FSn5AphH7kXxXzgJa8vLF4GoW42qBScwilk0PYKymAD1%2F9O8xueJ4WkqXwbOqrlpRYEw%2Ff%2FEkY73rOcfwe00dQHR9FZznlXAs5LcVZ0R20S72cQgNIW%2B0BfaOh0scL6MFewRGioa1T5i%2BnDbCZLsKVGD9Q6xFW2R%2FzDOF%2FGciu7HOU3syy5glnct0%2FrDyAx571t2rBK2n730%2Be%2FZ8BFSPKk7jBWUzHbaar4eC6oqzHidFEK6e8wmVmoPS6poEuuPHywA%2FcOxqln2qAwpwJYYlyjUZQnV6Z2qhEdm6W8%2Fd%2FpAQdCyL%2BKwopQVOSUg24I%2BWbk%2BUkGhCONS8by5p8Y%2BP%2BJvmOxxMoHXnyy8sUOWUfwQBkHUI5mGwr2YtTfuJn7zSBWeum89UIY0rqrA76Gqkl9ohFdoX0SyvMp5i3pYVBYqfg2NS0wxIFXNsB6yDjKtc7xP0omgUwv73WyQY6pgEzY%2BXHnLuT4ypVGptKNVJWdy9fiNi5tSy4dX%2B8idO4NHhvCW1ZoCKRmv54eW1Xa8j%2BMkpZSMcMcMjDL%2BYiGjOS%2FU129CEyBbQAVZezdIObG8wSZUYXhuwMurUbchVaFkbc3Jvx8Htcj4QNZI6ze3S1G5HMvrVhtJAZyjy9I8zETwLJCMoy4efG0OlMwSusmeLKXU%2FpPvYF999UDUJImh%2FfUMrkQEUU&X-Amz-Signature=0279a36e606ac271cfe525a0099bcded878d541463bd80a42db63872b4a8ef40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A23GBVF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHN0MOUN6G6Zkm2h0VTU4uZBv8vXTG4m%2B2uJkxSNtqFoAiAcD0v%2F%2FpwRGrxYUdHQSo6T3VEOxOdUOAyglpEkQHy6ZyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQzo%2BIWZwCjzF4pqMKtwDOxHByvRCFgj%2FyqBdVM5G8y69RtHEnatfQGPLG4a72ALwnBimBsaDnT4CRhvy4t%2FYwdLC%2BiFpnw5%2BRfdiwox1MNLUaX%2FVz3I5Hu9HBAVEHI%2F%2F4yQMB%2FdBsRKyLwZtaY%2BPFdAG8jen%2Fv9aNJ2k%2FgeEBseG5d%2BNh90%2FDJxE9gD%2BbO%2BDzW%2B7MY%2FSn5AphH7kXxXzgJa8vLF4GoW42qBScwilk0PYKymAD1%2F9O8xueJ4WkqXwbOqrlpRYEw%2Ff%2FEkY73rOcfwe00dQHR9FZznlXAs5LcVZ0R20S72cQgNIW%2B0BfaOh0scL6MFewRGioa1T5i%2BnDbCZLsKVGD9Q6xFW2R%2FzDOF%2FGciu7HOU3syy5glnct0%2FrDyAx571t2rBK2n730%2Be%2FZ8BFSPKk7jBWUzHbaar4eC6oqzHidFEK6e8wmVmoPS6poEuuPHywA%2FcOxqln2qAwpwJYYlyjUZQnV6Z2qhEdm6W8%2Fd%2FpAQdCyL%2BKwopQVOSUg24I%2BWbk%2BUkGhCONS8by5p8Y%2BP%2BJvmOxxMoHXnyy8sUOWUfwQBkHUI5mGwr2YtTfuJn7zSBWeum89UIY0rqrA76Gqkl9ohFdoX0SyvMp5i3pYVBYqfg2NS0wxIFXNsB6yDjKtc7xP0omgUwv73WyQY6pgEzY%2BXHnLuT4ypVGptKNVJWdy9fiNi5tSy4dX%2B8idO4NHhvCW1ZoCKRmv54eW1Xa8j%2BMkpZSMcMcMjDL%2BYiGjOS%2FU129CEyBbQAVZezdIObG8wSZUYXhuwMurUbchVaFkbc3Jvx8Htcj4QNZI6ze3S1G5HMvrVhtJAZyjy9I8zETwLJCMoy4efG0OlMwSusmeLKXU%2FpPvYF999UDUJImh%2FfUMrkQEUU&X-Amz-Signature=1313f6b141c2e40c2f1d72e05fe15dcdd3b5bec79384e5a509fc1260ca50964a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

