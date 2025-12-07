---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP4IKSJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrjlgiyf0%2BXxXUWaoo3g8LRy89gys6wAIuyDZNT8YVkAiBeecQma9UMxc9mtMtQiND2yCtT0sNySB1HA1J7%2FI0dySqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3jEeaJ1UUL8DdWDDKtwDqDtAFQFPn0KI3lWikbn%2Bx56KYZYU2TlHsi5cx1jpjSZoSbubW7WLFLf%2FPLtMLcWGBFrK%2FYE4BVemHLE8nuIQo1AYEXiKiSLF8xvqJtF2g8GCekR7JheXItFLc2xuwizEhSuPUhq3Y6GihkxQJvc1xiYTIRQ2pn9%2FG5j%2Bl%2B40tBKHpPILqFQqejUhsZqJGU6EMNH5aaJQjtX3yeWiDz2N6jO%2BS69%2BQi%2BDZKlLhYegnKX8i28Fz9zStMedBFszHTb66WxPA5QZK9ASMYk1KxjL1x%2FVpCVjUBz8Kab84IgIlks%2Fwygo%2BQiSyAhrwL5AZDBoJ4oEeZwJJHDTSnmufWG6dh%2BQ198e3CF62UTEatuyA21DmuvbWrCtEyKVqguOgxnLAXjATHxIf1wQGeKOZ%2BvcQ6R%2FfUeIUesB6vOfqmD2ALbG0ppbLtcqBqB3b1Jd1QUfZnlnrKR9vOg%2Bg%2Be4PWTCjefT84vkjYM5ZpXRy21Odz9sztj4HNn%2FzNxq85Jf4DVTQYsiXlC492FWzAhWshH3KDeTprwBohdjFpDxFm3O9EY9ap%2FugrYe3skVE98L4wXTsTziICyhiTmOTSJ%2Fx6Y9IBS0KAfo7B2txJcJP9eDcJFPXTnH2dBKPDmy4JAwnLnWyQY6pgE03zA0XLQpeeXoT57h3M9bvIJBxLM25zRtU%2FaSwROVkT8XH%2FEWfvtXbfrg2Pw1prF1SsKwuvkHkeqS5rU%2FCEqBhI%2BnMd2mMy7BAmzM%2Bfgt7OWeFnf%2FUlMMAOBy4GPSzOiFruVm%2FHDZbLr4Bi%2Fbyr6pNeY4riFoSs5rfq1nsiXJ2oEt9cWSmWBXEYkBycxChJR2rwA0qFIVpeJPsDtIthOn888JRg9u&X-Amz-Signature=688ece252c22368e7d141212af25daa06444dd1a8bf1602873c67d32109bc90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP4IKSJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrjlgiyf0%2BXxXUWaoo3g8LRy89gys6wAIuyDZNT8YVkAiBeecQma9UMxc9mtMtQiND2yCtT0sNySB1HA1J7%2FI0dySqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3jEeaJ1UUL8DdWDDKtwDqDtAFQFPn0KI3lWikbn%2Bx56KYZYU2TlHsi5cx1jpjSZoSbubW7WLFLf%2FPLtMLcWGBFrK%2FYE4BVemHLE8nuIQo1AYEXiKiSLF8xvqJtF2g8GCekR7JheXItFLc2xuwizEhSuPUhq3Y6GihkxQJvc1xiYTIRQ2pn9%2FG5j%2Bl%2B40tBKHpPILqFQqejUhsZqJGU6EMNH5aaJQjtX3yeWiDz2N6jO%2BS69%2BQi%2BDZKlLhYegnKX8i28Fz9zStMedBFszHTb66WxPA5QZK9ASMYk1KxjL1x%2FVpCVjUBz8Kab84IgIlks%2Fwygo%2BQiSyAhrwL5AZDBoJ4oEeZwJJHDTSnmufWG6dh%2BQ198e3CF62UTEatuyA21DmuvbWrCtEyKVqguOgxnLAXjATHxIf1wQGeKOZ%2BvcQ6R%2FfUeIUesB6vOfqmD2ALbG0ppbLtcqBqB3b1Jd1QUfZnlnrKR9vOg%2Bg%2Be4PWTCjefT84vkjYM5ZpXRy21Odz9sztj4HNn%2FzNxq85Jf4DVTQYsiXlC492FWzAhWshH3KDeTprwBohdjFpDxFm3O9EY9ap%2FugrYe3skVE98L4wXTsTziICyhiTmOTSJ%2Fx6Y9IBS0KAfo7B2txJcJP9eDcJFPXTnH2dBKPDmy4JAwnLnWyQY6pgE03zA0XLQpeeXoT57h3M9bvIJBxLM25zRtU%2FaSwROVkT8XH%2FEWfvtXbfrg2Pw1prF1SsKwuvkHkeqS5rU%2FCEqBhI%2BnMd2mMy7BAmzM%2Bfgt7OWeFnf%2FUlMMAOBy4GPSzOiFruVm%2FHDZbLr4Bi%2Fbyr6pNeY4riFoSs5rfq1nsiXJ2oEt9cWSmWBXEYkBycxChJR2rwA0qFIVpeJPsDtIthOn888JRg9u&X-Amz-Signature=6293bb0e30c431c045f73bf6797133d3deb20f5e030a6526b788c1981982bf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

