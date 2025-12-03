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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPC3IQY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIAYhcWdCim9YIZDXy6%2BtAJMW1%2FU169lpAfCieo5MjoyQAiEAqua062nhN6c7%2BbaWxL4ty0E5J8XjcdD1gEXk2YiADecq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCKUWIYsXxcSzJ8DBircA%2F0S0jf9haWdcQsw2wjqKL%2BwfiR3BT2LB92FUhLnnIydlosBFb6szCAVotaSlVB0IUYU2ZZsMKWdn2aywIUYqKrRGHwRpZto3FTilSqc%2BBkLOeBU9i6lcTxDocd3UY4tZAiVrNDxSfpuY5bDHJzHQadd%2FqcPca4lXKyPTV%2FI3F759efqHBjtxVxTBnl62rrTzz0nBxz9AVFob4J9DsUnMYPxdp1KDcbxuUEV%2FujGYewSUjZHcMVVzCW7SmB2GpFSOz7hWzvK%2FlFDCM11Es864MORY6BtORgkqEmp%2B8zu7DrP7IpEb8QzLpsaU9IBI2f9xrPQXQfJvTsbi4MDyhA8TYpGAZYc5OXiAY0i0ZD4Nlsyi%2BiniXBsEbx9uFeui5CG9AL1Q9WDiMGA6DE9YVXeG3h9hTZOz0V7N%2Fmvn1NjzAeAbAPiGEpifk%2Fnkm1KzYpdA2hYzpPekK%2BqjyZpXkWYAvLqbIuxgUY2DRxrdL80ow9I3DicyFf82T7N4tOFbL3Be6%2BIpei2LwYeMAYuc3ZHs7xV49QWR35YwJi9%2Bw5wC8cRowKweNH%2BFAjBWcBgNR%2FgJ9vEsS7ixku8fXLKbm8%2FWY%2FEqxiM%2FECyDZIb6RuK4tDoksDJouopIycWOtXuMMXUv8kGOqUBkMC%2FSOxjL2pl%2F%2BJ60d%2FzSN6YJf%2FMOSeAOlgo0g%2FPaU6vS0mMJS3abDMh2dMQDVSKUdQjaXSyaUHzgnS6etNhAtAiRP%2B0E1Yl5ppLS7Q%2FfdyfaehDRyapszz4eWdC0ocMr0Lb4ikFhIVeI0EdDEiQhXPmV1zrFJ5h8EVE1LdoTgFZfJoWPG8DhfeHb79Knfnq8ftfTQQ9d%2FNH8rz5aEu97PxCDC78&X-Amz-Signature=b85280ba4c89e51ef05803e8059d9c4c5b91be65c3e4f8129ec4135555347ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPC3IQY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIAYhcWdCim9YIZDXy6%2BtAJMW1%2FU169lpAfCieo5MjoyQAiEAqua062nhN6c7%2BbaWxL4ty0E5J8XjcdD1gEXk2YiADecq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCKUWIYsXxcSzJ8DBircA%2F0S0jf9haWdcQsw2wjqKL%2BwfiR3BT2LB92FUhLnnIydlosBFb6szCAVotaSlVB0IUYU2ZZsMKWdn2aywIUYqKrRGHwRpZto3FTilSqc%2BBkLOeBU9i6lcTxDocd3UY4tZAiVrNDxSfpuY5bDHJzHQadd%2FqcPca4lXKyPTV%2FI3F759efqHBjtxVxTBnl62rrTzz0nBxz9AVFob4J9DsUnMYPxdp1KDcbxuUEV%2FujGYewSUjZHcMVVzCW7SmB2GpFSOz7hWzvK%2FlFDCM11Es864MORY6BtORgkqEmp%2B8zu7DrP7IpEb8QzLpsaU9IBI2f9xrPQXQfJvTsbi4MDyhA8TYpGAZYc5OXiAY0i0ZD4Nlsyi%2BiniXBsEbx9uFeui5CG9AL1Q9WDiMGA6DE9YVXeG3h9hTZOz0V7N%2Fmvn1NjzAeAbAPiGEpifk%2Fnkm1KzYpdA2hYzpPekK%2BqjyZpXkWYAvLqbIuxgUY2DRxrdL80ow9I3DicyFf82T7N4tOFbL3Be6%2BIpei2LwYeMAYuc3ZHs7xV49QWR35YwJi9%2Bw5wC8cRowKweNH%2BFAjBWcBgNR%2FgJ9vEsS7ixku8fXLKbm8%2FWY%2FEqxiM%2FECyDZIb6RuK4tDoksDJouopIycWOtXuMMXUv8kGOqUBkMC%2FSOxjL2pl%2F%2BJ60d%2FzSN6YJf%2FMOSeAOlgo0g%2FPaU6vS0mMJS3abDMh2dMQDVSKUdQjaXSyaUHzgnS6etNhAtAiRP%2B0E1Yl5ppLS7Q%2FfdyfaehDRyapszz4eWdC0ocMr0Lb4ikFhIVeI0EdDEiQhXPmV1zrFJ5h8EVE1LdoTgFZfJoWPG8DhfeHb79Knfnq8ftfTQQ9d%2FNH8rz5aEu97PxCDC78&X-Amz-Signature=ec8ba93c0d51ae9b3358e4d849ddb9d014cb82088a428e42344cbab6bfbebaa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

