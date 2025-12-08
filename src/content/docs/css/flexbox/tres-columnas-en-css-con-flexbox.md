---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2U7FLX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BmzIK%2BNGYDFZKy%2FD34vtr%2FVsj7qUJ%2F1EANG03INz9oAiBTwwnOiveHJ8fWlaN2u6E2otOPCgEhc3LbNEtgBTqW4iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2FlhurrQUee6fTM8KtwDR%2BguZSanMngBPDETXhvwWcacb0fQiDw4rlcvFLrOIR2SiovKdqggOlOcb2vriAaxSS7zSQdLp4sHdbHKqpQZ8obfFAV9nWzOlYC3BKNJbW4j5THdnxGff8uhURpw2%2FKFvPBwDwGInmVrnXTvw%2BV05eju10DbpkLO1YnjiS0Z%2FEJnZkJZumn9l3xJLfDh8f8bdYvJ90GK9tkDV2Bs5nB6M7Edu1ZJARI5YrFer8QuzaMP9aFD40Ml9u6BoU7zfFgxx3HBZruXfb1%2FfbEw29AJRJPWdKPmDjAfw%2BayHVh1MpXIMIcDylWUvlIY4wGGC7UTEpSl8w0Zlba9GNyPorsBDMQ5cPuqAX%2FEZwbENI97sIWO%2B7TFs0S5G3ttZ5WVhM%2Bhhh4195TJcDT2MQ30wiMsfz19xRd6zjiewDTImcFQbLBYeme7tD4uwd24XAjYtHdOIaBJyGeFz6z%2FLib2NgEZiCXym9qgfy4y1oT9VwD1LoUOAIVYmi%2BbwFRai94svmYYG6D6CqvmSikLF2tpMYqPJ8xfI537DK1SbtMDQru8OESi5aCviAv%2Bpfb0pKqwHVRKGuDiPxBS2dlJchdHEcYwSxVZWJFuy%2BGDguzSZruX8lFcjnQ9R39xlhgkq1Ewn7TcyQY6pgFwU5Daj4QucxDQu%2BF8KoAmIabFV%2FUDD9%2BAdzN%2Fg%2F7wFFsweONNFDw0moQU4HfOMXl3t2R7%2FVbE6tFopQ6oMxC7CHlP5aEnq43ktF5qUnBxVpKg8zzsA%2F2nY29olOW3r2L9FiT4tUc9Qf%2BwmHKx3k1Jr2%2F6OqHJTpi5%2BwsQKF%2Bjckh2PB%2BOIpEfFeQZkcWWRNxT3aLMeZnKQXZNvy1xTiYM4ZiIbggQ&X-Amz-Signature=fcb4ee8e6d0e4dce8c7e76d39eba0ff00b1c516dcb8d49f8347fa0608caa50da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2U7FLX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BmzIK%2BNGYDFZKy%2FD34vtr%2FVsj7qUJ%2F1EANG03INz9oAiBTwwnOiveHJ8fWlaN2u6E2otOPCgEhc3LbNEtgBTqW4iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2FlhurrQUee6fTM8KtwDR%2BguZSanMngBPDETXhvwWcacb0fQiDw4rlcvFLrOIR2SiovKdqggOlOcb2vriAaxSS7zSQdLp4sHdbHKqpQZ8obfFAV9nWzOlYC3BKNJbW4j5THdnxGff8uhURpw2%2FKFvPBwDwGInmVrnXTvw%2BV05eju10DbpkLO1YnjiS0Z%2FEJnZkJZumn9l3xJLfDh8f8bdYvJ90GK9tkDV2Bs5nB6M7Edu1ZJARI5YrFer8QuzaMP9aFD40Ml9u6BoU7zfFgxx3HBZruXfb1%2FfbEw29AJRJPWdKPmDjAfw%2BayHVh1MpXIMIcDylWUvlIY4wGGC7UTEpSl8w0Zlba9GNyPorsBDMQ5cPuqAX%2FEZwbENI97sIWO%2B7TFs0S5G3ttZ5WVhM%2Bhhh4195TJcDT2MQ30wiMsfz19xRd6zjiewDTImcFQbLBYeme7tD4uwd24XAjYtHdOIaBJyGeFz6z%2FLib2NgEZiCXym9qgfy4y1oT9VwD1LoUOAIVYmi%2BbwFRai94svmYYG6D6CqvmSikLF2tpMYqPJ8xfI537DK1SbtMDQru8OESi5aCviAv%2Bpfb0pKqwHVRKGuDiPxBS2dlJchdHEcYwSxVZWJFuy%2BGDguzSZruX8lFcjnQ9R39xlhgkq1Ewn7TcyQY6pgFwU5Daj4QucxDQu%2BF8KoAmIabFV%2FUDD9%2BAdzN%2Fg%2F7wFFsweONNFDw0moQU4HfOMXl3t2R7%2FVbE6tFopQ6oMxC7CHlP5aEnq43ktF5qUnBxVpKg8zzsA%2F2nY29olOW3r2L9FiT4tUc9Qf%2BwmHKx3k1Jr2%2F6OqHJTpi5%2BwsQKF%2Bjckh2PB%2BOIpEfFeQZkcWWRNxT3aLMeZnKQXZNvy1xTiYM4ZiIbggQ&X-Amz-Signature=6ffa7cf995c9d90bc45ea07791d5c9351aff072bcaff72072cb8a2fd83822a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

