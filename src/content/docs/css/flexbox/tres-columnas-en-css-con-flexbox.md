---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TGRRYVO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BSl%2BtkYJuIYbCs%2BKc5aVvA7cO2vgtki2cXwYoD%2FcefAiAFN4OaZp4308WVP1O2Q0rG00mtDaZdAsovzsJ1RbdvTSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kQchySTlKjc%2BKZWKtwDRcrAwuo5nFZaknkrBOZP4mJQcCedE71Hzq9PSeHEMPnyfDgSxqvHKbe75fU3BkJYYxXaAzkYaLc%2F%2B9AUzGfr176vRoJ7mtkQOBFcqCCkZyalCMVlOsHNL3OUhJK1PelaTl1QmnDTfjd6MTpLrwlJtAf8DMMxnV5vC0L%2BUn88IJxuhDER%2BNNgCzJanlfy%2F2ieruOsNSSmA26hpvXr3mYa4TTeAAIQOXfDbqyPQn3HeAO1%2Fyf93mJuymP2a1U%2Fsz0vbiKvIGktBT3V%2BBSFdFUTGaQBDjxe%2BO26FdhQSMzo1Hk%2BFej4RilF2NgYc4xHGNhaKLn0Mb%2B7j39Jtefb4SMV25t6F6CgQfuEhH9VPzhrj%2FSyin5LIcoDVSA5XcKWPL41AbWTkf3lT%2FR%2BTiOCH4RCBT2KIqzmZ5BapE38eGFPayBszU8tW3KOGgnWNy4lzvvoKH7HDkxg4KXZroOe1Z27gEI1M%2Fagdg5GitqJ7RgDDVyJH99biAMvlf61ie0SSqq3wWS1eVH%2BZcsPfTxpkVy9l3a0Uuc3xtnUVGrtxoDhEN%2Boifa8D6N3kdzPf40cbDNHpgvkboMkX3gbOWgWEpBMMJWGBaOtCeZWRhqJgH1kx7h39xJF2321t2WpPs8w%2BrXWyQY6pgFIFdre8y82nZSZSB%2FuD8z%2FxGJz%2BF0fk353YAgrQikUSU4W8CiYtzkJn03UyZg9LXZLefIPUw2JwQURaqsog%2BlUOtoe8GV%2BVNRVy2iSdCpIMyF5s90A97Fmz6i167%2FJt2y5Bhx4V9motauGpF4V76W0uUFbwJ2mz1JQhktrt5PLlCelZRjt1rXVeSrloYkZIZTPsVpfAywPvvDeCF2tk9K8gGbtc8QD&X-Amz-Signature=6bfdc6e31822b71bf824208f36e5e6efb25aac3be61baa5b19b00e35ee4d4b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TGRRYVO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BSl%2BtkYJuIYbCs%2BKc5aVvA7cO2vgtki2cXwYoD%2FcefAiAFN4OaZp4308WVP1O2Q0rG00mtDaZdAsovzsJ1RbdvTSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kQchySTlKjc%2BKZWKtwDRcrAwuo5nFZaknkrBOZP4mJQcCedE71Hzq9PSeHEMPnyfDgSxqvHKbe75fU3BkJYYxXaAzkYaLc%2F%2B9AUzGfr176vRoJ7mtkQOBFcqCCkZyalCMVlOsHNL3OUhJK1PelaTl1QmnDTfjd6MTpLrwlJtAf8DMMxnV5vC0L%2BUn88IJxuhDER%2BNNgCzJanlfy%2F2ieruOsNSSmA26hpvXr3mYa4TTeAAIQOXfDbqyPQn3HeAO1%2Fyf93mJuymP2a1U%2Fsz0vbiKvIGktBT3V%2BBSFdFUTGaQBDjxe%2BO26FdhQSMzo1Hk%2BFej4RilF2NgYc4xHGNhaKLn0Mb%2B7j39Jtefb4SMV25t6F6CgQfuEhH9VPzhrj%2FSyin5LIcoDVSA5XcKWPL41AbWTkf3lT%2FR%2BTiOCH4RCBT2KIqzmZ5BapE38eGFPayBszU8tW3KOGgnWNy4lzvvoKH7HDkxg4KXZroOe1Z27gEI1M%2Fagdg5GitqJ7RgDDVyJH99biAMvlf61ie0SSqq3wWS1eVH%2BZcsPfTxpkVy9l3a0Uuc3xtnUVGrtxoDhEN%2Boifa8D6N3kdzPf40cbDNHpgvkboMkX3gbOWgWEpBMMJWGBaOtCeZWRhqJgH1kx7h39xJF2321t2WpPs8w%2BrXWyQY6pgFIFdre8y82nZSZSB%2FuD8z%2FxGJz%2BF0fk353YAgrQikUSU4W8CiYtzkJn03UyZg9LXZLefIPUw2JwQURaqsog%2BlUOtoe8GV%2BVNRVy2iSdCpIMyF5s90A97Fmz6i167%2FJt2y5Bhx4V9motauGpF4V76W0uUFbwJ2mz1JQhktrt5PLlCelZRjt1rXVeSrloYkZIZTPsVpfAywPvvDeCF2tk9K8gGbtc8QD&X-Amz-Signature=99b48845c1c259498ed796bdc45e3389d050ecdc772f8f71c9832956d31d2d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

