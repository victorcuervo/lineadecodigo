---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN6G2R5P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2BUNzGtJRPjxv32och142bFWc%2FSnbxb29ThB%2B5%2F6N6QIgdHdqX6rwgsRfk7ted505Mc0UQCZYO1QcfVgqYXIC7h4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOj%2F4SQ5JndcsTmWQCrcA1vm4P1p1shUTs7op6t93l7NMHDyA5BzEmfqxwWUkAvY9g6mIkR4Us4GIOgPEX2yezPPjM4zBoZF0KmhQfADWkqlzFYxmvnBizfTs8pmydifPBl8iEpgO2lerZjur6XVjOrwJbj833xsFhQG7v29VmQrY%2B848r5Z4aWQIYpLjrrv%2BDxDxW7qYLUDYKI0AoOgwl7x5EVZOqGhCdaFpY8gJCAUAPEfbdXNvtJy8zRdV9wiIw%2FiS%2BQF%2BJmT9BH9fFON7%2FcDMuWZX1LUH%2BTp7DQ1YzXEai4S6ZHOG0gkDXoJL%2Bz03CSnyjksHeeqKui8N6lTuXwg1gXL67XBxdL7yUR17ZtXjnEkcozS09Jy0UU3mpGNeb1EhjijATy3m78w4RQV02Tdvb18V6jl1R4O%2Bwr78b6%2F8zs0lYaeQUJVgGwDwgj9QgOYxlDybndx79oQNaQVhOB1jDagSHGnhcP2kt0gDRYUOMorvf4ZOfqq7AsUvWeTTrCdgMa6DakZBznBAnzaGh6THT%2B9A5ENdcwL6F4NeKW7jbPKetwI7%2F3b3%2Bj4QRmp646qkKrKtn04qTcNMkVptCU9HGgUwyUutkZw4NQGjteUmPrbMEZULMbShl6jnScwt63OWBxXB7y%2BMNwYMJeez8kGOqUBLIQrJGvhhdEAGaWkinFO2%2FX64fvmPhH5RLWeJyXXmEEBPDfqlK%2FTHMsFT167BW8hDQCnS1n%2BV10VbFHJJm6EENkSnTIyW3umSFUmfSkuwurcbk0%2F1L0mziIXO%2BYtvCA%2Fs1S8ZvzXIwc0S4skqNXEfKiodAMhTKQMJhwoMMUz1EL3F5O4Ny6K7ZUOOIQZVM27%2B5O%2FpIjnF0MRlIcWihkAgQfuKN2X&X-Amz-Signature=7dba068ba88a26f9a770a76b8bdf111b19d8d0dda7602db0b26f161f42077a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN6G2R5P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2BUNzGtJRPjxv32och142bFWc%2FSnbxb29ThB%2B5%2F6N6QIgdHdqX6rwgsRfk7ted505Mc0UQCZYO1QcfVgqYXIC7h4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOj%2F4SQ5JndcsTmWQCrcA1vm4P1p1shUTs7op6t93l7NMHDyA5BzEmfqxwWUkAvY9g6mIkR4Us4GIOgPEX2yezPPjM4zBoZF0KmhQfADWkqlzFYxmvnBizfTs8pmydifPBl8iEpgO2lerZjur6XVjOrwJbj833xsFhQG7v29VmQrY%2B848r5Z4aWQIYpLjrrv%2BDxDxW7qYLUDYKI0AoOgwl7x5EVZOqGhCdaFpY8gJCAUAPEfbdXNvtJy8zRdV9wiIw%2FiS%2BQF%2BJmT9BH9fFON7%2FcDMuWZX1LUH%2BTp7DQ1YzXEai4S6ZHOG0gkDXoJL%2Bz03CSnyjksHeeqKui8N6lTuXwg1gXL67XBxdL7yUR17ZtXjnEkcozS09Jy0UU3mpGNeb1EhjijATy3m78w4RQV02Tdvb18V6jl1R4O%2Bwr78b6%2F8zs0lYaeQUJVgGwDwgj9QgOYxlDybndx79oQNaQVhOB1jDagSHGnhcP2kt0gDRYUOMorvf4ZOfqq7AsUvWeTTrCdgMa6DakZBznBAnzaGh6THT%2B9A5ENdcwL6F4NeKW7jbPKetwI7%2F3b3%2Bj4QRmp646qkKrKtn04qTcNMkVptCU9HGgUwyUutkZw4NQGjteUmPrbMEZULMbShl6jnScwt63OWBxXB7y%2BMNwYMJeez8kGOqUBLIQrJGvhhdEAGaWkinFO2%2FX64fvmPhH5RLWeJyXXmEEBPDfqlK%2FTHMsFT167BW8hDQCnS1n%2BV10VbFHJJm6EENkSnTIyW3umSFUmfSkuwurcbk0%2F1L0mziIXO%2BYtvCA%2Fs1S8ZvzXIwc0S4skqNXEfKiodAMhTKQMJhwoMMUz1EL3F5O4Ny6K7ZUOOIQZVM27%2B5O%2FpIjnF0MRlIcWihkAgQfuKN2X&X-Amz-Signature=dea23ec7385127dcc0da3a09d07343c400bde17f21cb0d7da486e528125094a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

