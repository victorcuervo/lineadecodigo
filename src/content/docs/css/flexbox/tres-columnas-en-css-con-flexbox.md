---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XE24RJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIB6fAer12AEBWOa9tcJvUgva3IhdfUjoq3uKnbCSiZfMAiAB5pzfQIbC9x1Em6dNRbe0u47Ond5UnNQd8EYdsjhTXSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM9eCbH1L%2FvuQ6CrrqKtwDvSiGx4JbCE9ntYYHTVkqbz52vZzF0DA42PCobwX0%2FUwJO%2Fy1YP1UlkpB3QcjlHXVjzeWYevD0eKVJMFKmFF1O8iNPZ13tJ9WG7QcoMSk6hJqf0byFwiIve6XmKL5NKXvbXvuQxClatz%2B0INPga5tOuk2R67BOrXpzuKhFC52y%2BC06xqGSPu91E4fH96hCWmE9vE5FPxs1PFYT3LaA1xnuUjRwqAH47u%2Bzk5Mm81N1lMjzjxNz7sq2bTl2Uu899PjJNzmvQQRdOZ8S6ijL0HYqIgr%2F25QJHTFe3Oed0G00lDd%2BnkRPXQAywm45dxtNtEqhlFKoROxMiACRqJ7pDoJ2%2FjWaOkdAd%2FvekrLhSGx53fMNqawS0yzuL07fCUnZ1%2B628fD0cN%2BFvwRAaZLOtlFUaybZEyn0cNj8FCsuPyS7lX0CHyINioXUeenDcCow1T0flLBRe25aM%2FblX%2FNk74z1%2B5vqskHoMWPInS6MhSptKSVLCRgS%2FhhcVAity9Hd3Eb3MrB2zNqHFE1l4ppcHFdy9lgZuDa6%2BBHzz%2FzdEYS9Oevvvyr4oFic0W7hJ6CbT3hMBxCfSVSmQamNnu3YmEz7asEu0VunGfRh4WK4up515Qscyj%2Fl1CqYWlME8YwgJXDyQY6pgGiCJA8ZQzrNjlD%2BbASkTTdoiYwDg7iQeNf8RgrpPm0VH7Y6VcQgrxNp1X8X6ZijYlv5u7V212otsWPSbh4MqrtwzYdhs9dEGyjY%2BIQqchwdlYHKHJSaDYCxyveDEzR7ySbccRXKuN1y6hkrqMcNjHVjdPpjuvqHeMGEI5DfUqmgtNVAPXxNlRuT2S9co5vPReissPpeUgrISOct0uXIs7gTS1YAHQ4&X-Amz-Signature=4cdbc97fb80bef5c16301f77060d09376f35dd0c966e7470be7c1a10f8ecbd8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XE24RJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIB6fAer12AEBWOa9tcJvUgva3IhdfUjoq3uKnbCSiZfMAiAB5pzfQIbC9x1Em6dNRbe0u47Ond5UnNQd8EYdsjhTXSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM9eCbH1L%2FvuQ6CrrqKtwDvSiGx4JbCE9ntYYHTVkqbz52vZzF0DA42PCobwX0%2FUwJO%2Fy1YP1UlkpB3QcjlHXVjzeWYevD0eKVJMFKmFF1O8iNPZ13tJ9WG7QcoMSk6hJqf0byFwiIve6XmKL5NKXvbXvuQxClatz%2B0INPga5tOuk2R67BOrXpzuKhFC52y%2BC06xqGSPu91E4fH96hCWmE9vE5FPxs1PFYT3LaA1xnuUjRwqAH47u%2Bzk5Mm81N1lMjzjxNz7sq2bTl2Uu899PjJNzmvQQRdOZ8S6ijL0HYqIgr%2F25QJHTFe3Oed0G00lDd%2BnkRPXQAywm45dxtNtEqhlFKoROxMiACRqJ7pDoJ2%2FjWaOkdAd%2FvekrLhSGx53fMNqawS0yzuL07fCUnZ1%2B628fD0cN%2BFvwRAaZLOtlFUaybZEyn0cNj8FCsuPyS7lX0CHyINioXUeenDcCow1T0flLBRe25aM%2FblX%2FNk74z1%2B5vqskHoMWPInS6MhSptKSVLCRgS%2FhhcVAity9Hd3Eb3MrB2zNqHFE1l4ppcHFdy9lgZuDa6%2BBHzz%2FzdEYS9Oevvvyr4oFic0W7hJ6CbT3hMBxCfSVSmQamNnu3YmEz7asEu0VunGfRh4WK4up515Qscyj%2Fl1CqYWlME8YwgJXDyQY6pgGiCJA8ZQzrNjlD%2BbASkTTdoiYwDg7iQeNf8RgrpPm0VH7Y6VcQgrxNp1X8X6ZijYlv5u7V212otsWPSbh4MqrtwzYdhs9dEGyjY%2BIQqchwdlYHKHJSaDYCxyveDEzR7ySbccRXKuN1y6hkrqMcNjHVjdPpjuvqHeMGEI5DfUqmgtNVAPXxNlRuT2S9co5vPReissPpeUgrISOct0uXIs7gTS1YAHQ4&X-Amz-Signature=62ecc7e04081b2bc2db81397e023809e381578d886f4310e958497da6ae17aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

