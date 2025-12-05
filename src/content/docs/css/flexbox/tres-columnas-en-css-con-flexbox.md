---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642V5VVRT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fw6vJlOx9UksDxrOOrcECf92%2FN4lb5AeZOcv%2BJwtejAiBegcznOYxGfpPtf2kvDpGevaMfnIpQPNRJ5CZw%2FgDjjCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMiJNU1fdT9cZBnBqRKtwDVd6lCJbr%2BAF5UKTZqLDti7Gq6BjQhlXL38xXUfr%2Bz8KeBju5u23Z426HHXPT7kx2SCatWo0BJ7eKHyrkZuqDpSM6plHefIFpgV1PTO%2FkZ3DKUR0%2BdLUdu%2BsGmsSWXB8WQtnOeitjqh73m2JJ07SsBdZMn2y4Jx9sdhCuWd2Bs%2FhBUAjJjcVL020E4VxISsSsmI%2FiUE1yuBucth31I9L3xk89zOXQIeF9Bc9g%2BTD6LkJTzdyAcsNMRisyxh8U1sGhkhQjC3QbamAtFg8jLHac5X91U0cRN5MbbDKRPx%2BAb%2F6dk88V9fFfPPrbXaav2M%2Bq7uDJA1%2BwrkiHKIDilepaHhWBZfoTkLySzOQs9pS8UHc94G%2Fjj9MmsF7YJzk4%2Biwa8XytROGO2F%2BGYgGF%2FQ9Hnwx9wnr5u1A86vdXs0sH%2Br2cLrC0fLzjsAZyoBfONAGgn4JFJbQAeSc5cfP4LoGM5imDhQzT18SV78G4Q%2B0BPUi0LYIwxqfdvDWCNjjczwUCHJ2nFfKriOrqse9RWBL8XupgLetEwwyMZtNDIqWu2OpVQ7e6mg2t9BTGSmm8uoKCO02Pk0HST8hJcnAdCAKIpfHvQUxH0w%2Fadab4gv%2BPIOqW4We%2B2piIP0Y3xhAwrIzIyQY6pgHLBe74xL6NI4SM8AnVSorBQEIhI0%2FFtHNLwcl6nkO1v7NE%2F69hUVMt2np71zCrcLx9T3g2F13a65ZMMr0nW8eSd2L%2FSG45tmO867tqH8M6wBLayG68NjRxtdaZTLbWHvI%2FLZ1%2Fr29%2FYHOOWU53sPV8jAoOcSsOQ2L8wwl0w9ik0xSe80xnaIENYQCOfaFKfqkRhBUYLh48hZgYNm3i6eJaKpq0%2Fjrc&X-Amz-Signature=64fb7d0e3a0cc4115e5ac489d7517586a0e4e2c3cff4121aaefac830505dfc17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642V5VVRT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fw6vJlOx9UksDxrOOrcECf92%2FN4lb5AeZOcv%2BJwtejAiBegcznOYxGfpPtf2kvDpGevaMfnIpQPNRJ5CZw%2FgDjjCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMiJNU1fdT9cZBnBqRKtwDVd6lCJbr%2BAF5UKTZqLDti7Gq6BjQhlXL38xXUfr%2Bz8KeBju5u23Z426HHXPT7kx2SCatWo0BJ7eKHyrkZuqDpSM6plHefIFpgV1PTO%2FkZ3DKUR0%2BdLUdu%2BsGmsSWXB8WQtnOeitjqh73m2JJ07SsBdZMn2y4Jx9sdhCuWd2Bs%2FhBUAjJjcVL020E4VxISsSsmI%2FiUE1yuBucth31I9L3xk89zOXQIeF9Bc9g%2BTD6LkJTzdyAcsNMRisyxh8U1sGhkhQjC3QbamAtFg8jLHac5X91U0cRN5MbbDKRPx%2BAb%2F6dk88V9fFfPPrbXaav2M%2Bq7uDJA1%2BwrkiHKIDilepaHhWBZfoTkLySzOQs9pS8UHc94G%2Fjj9MmsF7YJzk4%2Biwa8XytROGO2F%2BGYgGF%2FQ9Hnwx9wnr5u1A86vdXs0sH%2Br2cLrC0fLzjsAZyoBfONAGgn4JFJbQAeSc5cfP4LoGM5imDhQzT18SV78G4Q%2B0BPUi0LYIwxqfdvDWCNjjczwUCHJ2nFfKriOrqse9RWBL8XupgLetEwwyMZtNDIqWu2OpVQ7e6mg2t9BTGSmm8uoKCO02Pk0HST8hJcnAdCAKIpfHvQUxH0w%2Fadab4gv%2BPIOqW4We%2B2piIP0Y3xhAwrIzIyQY6pgHLBe74xL6NI4SM8AnVSorBQEIhI0%2FFtHNLwcl6nkO1v7NE%2F69hUVMt2np71zCrcLx9T3g2F13a65ZMMr0nW8eSd2L%2FSG45tmO867tqH8M6wBLayG68NjRxtdaZTLbWHvI%2FLZ1%2Fr29%2FYHOOWU53sPV8jAoOcSsOQ2L8wwl0w9ik0xSe80xnaIENYQCOfaFKfqkRhBUYLh48hZgYNm3i6eJaKpq0%2Fjrc&X-Amz-Signature=6762dab4adcf7d5883f52149cafda773cc87343358773c7bfea0574ecb3c33b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

