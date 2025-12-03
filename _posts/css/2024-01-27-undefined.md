---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWZ3M5Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDpdHFn6lMymN6idJS%2BY4SiZB01zKX4207DS4stCYRytwIhAJ%2BfWxCXdCET9ElQoKYQL0QWmgloB1TOCk7z2Dv%2F3B3DKv8DCCwQABoMNjM3NDIzMTgzODA1Igxx0VCO%2Fo%2FzcVJruU0q3AN%2FGODkVVYnA%2FgSh85fWlvefE%2BmP2PsLENVRT2JsfQaEz%2FzfB5M4B64zLNUzLylW0IXHd1eeyO1JckVdpemSIB3UqgyzybV68as43Kh9XX4jQ1yrtptaztSwmgdKtBoSOBp%2BkLDXcfuRmUXoxUCYgL4f94l3auNQsGiGdutkzZBQ6zDsImye6ah8%2FZtegaCtKsDmFsok9y2KFS59HqFrktHTC%2FDL9hqB30tWxdFcsn%2BK8u%2Blssc%2FPpU4W%2Fx4DroB3KoHaCneuU4mH9mTh7nHHpLHju8QMo7kqN0OtlzbiUyqQZunxE%2B1Kb4MrE1W86%2BuXKaXkKtA9sRbQzQjWovsbo5YlreqJdRCIOcJM5xAo4g8jJtEtjJCXwA6tKQK9l8HO2H9i34veARKSKMANUKErr%2BrMiwULryjxqYHivLi2ujnBSyYhW5pE8rM5YnAaWShptbP9Ef3xtMvU%2BBmJ8E19NOY%2BkPsYzos%2FAcTQjYbByKExgcw5DaHAn9R2hmPzVXF9VI1xUpAnMu6BR%2FCptVbmNdT1Knw5OMPbcqM3xp7fHFbrXnT0zDKa%2BMtNs0NvDHw0WdcZZlda3wi8ecLD7K6Qo1vLVQiEaQ2nMOfTgwwvC%2FBDordX6iODiAeNNmTTChr8DJBjqkAWojW5s5tva3g%2BY9wIBw1PPEhTlVs2TICg6ZIt4ebA4yReEF7C5NX77a5cuPhvqmo6XD8RNdGt5GqbYhxYRDHNPipRnonNFWHxwhov27TRWVzNDyX5oxZjVQevh54Cr2r7kV%2FK5NAUYuymlFYCtBZfX27BGOIavXropAFzcj9h%2FKGx0JZPiJly6h7rlWHGDwMa2cZeIaeH0Rd7Fbu34DTvv411ai&X-Amz-Signature=398f6b253aed6d63786e34f1efeb12ecc586f9dfe67373ddc5b37292b5c056b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWZ3M5Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDpdHFn6lMymN6idJS%2BY4SiZB01zKX4207DS4stCYRytwIhAJ%2BfWxCXdCET9ElQoKYQL0QWmgloB1TOCk7z2Dv%2F3B3DKv8DCCwQABoMNjM3NDIzMTgzODA1Igxx0VCO%2Fo%2FzcVJruU0q3AN%2FGODkVVYnA%2FgSh85fWlvefE%2BmP2PsLENVRT2JsfQaEz%2FzfB5M4B64zLNUzLylW0IXHd1eeyO1JckVdpemSIB3UqgyzybV68as43Kh9XX4jQ1yrtptaztSwmgdKtBoSOBp%2BkLDXcfuRmUXoxUCYgL4f94l3auNQsGiGdutkzZBQ6zDsImye6ah8%2FZtegaCtKsDmFsok9y2KFS59HqFrktHTC%2FDL9hqB30tWxdFcsn%2BK8u%2Blssc%2FPpU4W%2Fx4DroB3KoHaCneuU4mH9mTh7nHHpLHju8QMo7kqN0OtlzbiUyqQZunxE%2B1Kb4MrE1W86%2BuXKaXkKtA9sRbQzQjWovsbo5YlreqJdRCIOcJM5xAo4g8jJtEtjJCXwA6tKQK9l8HO2H9i34veARKSKMANUKErr%2BrMiwULryjxqYHivLi2ujnBSyYhW5pE8rM5YnAaWShptbP9Ef3xtMvU%2BBmJ8E19NOY%2BkPsYzos%2FAcTQjYbByKExgcw5DaHAn9R2hmPzVXF9VI1xUpAnMu6BR%2FCptVbmNdT1Knw5OMPbcqM3xp7fHFbrXnT0zDKa%2BMtNs0NvDHw0WdcZZlda3wi8ecLD7K6Qo1vLVQiEaQ2nMOfTgwwvC%2FBDordX6iODiAeNNmTTChr8DJBjqkAWojW5s5tva3g%2BY9wIBw1PPEhTlVs2TICg6ZIt4ebA4yReEF7C5NX77a5cuPhvqmo6XD8RNdGt5GqbYhxYRDHNPipRnonNFWHxwhov27TRWVzNDyX5oxZjVQevh54Cr2r7kV%2FK5NAUYuymlFYCtBZfX27BGOIavXropAFzcj9h%2FKGx0JZPiJly6h7rlWHGDwMa2cZeIaeH0Rd7Fbu34DTvv411ai&X-Amz-Signature=cb095e306e5846850dbebc643038577e1c4c2240e65a433e5106df2271be15dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

