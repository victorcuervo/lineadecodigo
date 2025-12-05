---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL5HWEQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbFFG8u7zR9LdkUAlwEcZdx77nqE6RLG%2Bvf0a%2BS%2BJYhgIgKS1cs9WC6LNNdjTWkBTCwVAudVz%2F0YkVOAM5qqoa33Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCQjH7%2FX7MlEfLP5wSrcA40K%2BjNepcMb%2Bnb8zbkKZm9A3ITH6l3ucKMhRYUuZRiAbxlcFBA94JTtzqMgJ%2FZEBAc8OmT4Vmk0hXTayNUG7G0mr05OZqDjdNL0IgCqWfsXY4om%2Be0S4Bzr40YyZTN%2Fq3FdqHiVY1pjdjbcP9Uumvfukdi3HGGonmvLlfCMC0z3NAHrNA6G8GPhWOKKrr2UcQIxMKNTPM%2BObYFblswM%2F5hU2VDAcfpSdq0YGW98Gpjlfs7jyavtB%2FYsnNgUWGdESx4u7EB3tPWBaryNRecnbhPvI3zG4152Nzy55CVa%2FHRsyJwNzNvAW%2FOM8cmjiyt2BH6r4Ev7NS4432Mz7%2FqZXcc7ZTvgEN3rxmfFg5z8bz%2BRPdS78UV8bOSZzGwGSdRrb5O6MortpMhNOfynyY9CH5NSK14ywPLfc6tIzjl0%2Ftx0qkQb0sRy%2FPb%2BK0wroYkFdFQFMe0%2Bj1GAM0lltxYLBkwTC%2BkOjTd818Vmn0sV%2BCsnJC14Y1zz6%2BkkAW0g3UNfLIRBDxBcfx1Dio%2BUneEEVt%2FSq9NMZjc8QwI7mwg7pXw5ILupjqoivFQ25d2Ls4ezIuy4TA63Er1FMe37LLFdaYG4BoETLMNWc%2BnhLY5gQhgDp%2FSd5dUNMTt6u5MqMK7KyskGOqUBfWD55BVCw6JYOxw9%2FUdN1aS3JMq2h%2Bp99mjAVYBC%2FlTaHZFzFbEnC11JnD2FNc08qNGE80DcqWu9Gz%2FpkuhytBthvNjJemxvtXZmag0yCNKRkmqjJkouoR74rFjtklyeHwyp9402EDwWuhvwPGkM05VjFLMuDBjKv2PYNhfs2lt2VYb7km8ipO%2BFqOrbdPnoAd0zoFJl7P3NJSaOjfui5vzW%2BF5N&X-Amz-Signature=e930a05fb439ef69c770dc2ffd069bc3ae8017c7a3570143dc64c94c9e6d6a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL5HWEQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbFFG8u7zR9LdkUAlwEcZdx77nqE6RLG%2Bvf0a%2BS%2BJYhgIgKS1cs9WC6LNNdjTWkBTCwVAudVz%2F0YkVOAM5qqoa33Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCQjH7%2FX7MlEfLP5wSrcA40K%2BjNepcMb%2Bnb8zbkKZm9A3ITH6l3ucKMhRYUuZRiAbxlcFBA94JTtzqMgJ%2FZEBAc8OmT4Vmk0hXTayNUG7G0mr05OZqDjdNL0IgCqWfsXY4om%2Be0S4Bzr40YyZTN%2Fq3FdqHiVY1pjdjbcP9Uumvfukdi3HGGonmvLlfCMC0z3NAHrNA6G8GPhWOKKrr2UcQIxMKNTPM%2BObYFblswM%2F5hU2VDAcfpSdq0YGW98Gpjlfs7jyavtB%2FYsnNgUWGdESx4u7EB3tPWBaryNRecnbhPvI3zG4152Nzy55CVa%2FHRsyJwNzNvAW%2FOM8cmjiyt2BH6r4Ev7NS4432Mz7%2FqZXcc7ZTvgEN3rxmfFg5z8bz%2BRPdS78UV8bOSZzGwGSdRrb5O6MortpMhNOfynyY9CH5NSK14ywPLfc6tIzjl0%2Ftx0qkQb0sRy%2FPb%2BK0wroYkFdFQFMe0%2Bj1GAM0lltxYLBkwTC%2BkOjTd818Vmn0sV%2BCsnJC14Y1zz6%2BkkAW0g3UNfLIRBDxBcfx1Dio%2BUneEEVt%2FSq9NMZjc8QwI7mwg7pXw5ILupjqoivFQ25d2Ls4ezIuy4TA63Er1FMe37LLFdaYG4BoETLMNWc%2BnhLY5gQhgDp%2FSd5dUNMTt6u5MqMK7KyskGOqUBfWD55BVCw6JYOxw9%2FUdN1aS3JMq2h%2Bp99mjAVYBC%2FlTaHZFzFbEnC11JnD2FNc08qNGE80DcqWu9Gz%2FpkuhytBthvNjJemxvtXZmag0yCNKRkmqjJkouoR74rFjtklyeHwyp9402EDwWuhvwPGkM05VjFLMuDBjKv2PYNhfs2lt2VYb7km8ipO%2BFqOrbdPnoAd0zoFJl7P3NJSaOjfui5vzW%2BF5N&X-Amz-Signature=364a4e117131b8f0aa1bc9df931705d0b9c6e3e9e9f8cb616780a5053234cd79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

