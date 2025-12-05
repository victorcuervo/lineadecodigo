---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIY724L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnR8JE6v44znKfzLxswz6NuL7fUmCTwGVYjWRfb2o%2BNAiEAw5zn0HvzCeSRhRZZ2rAC9UEjUPlC3dBd8aQp2B8EOKQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDC%2F96XWywUDHz%2Be8ISrcAzpW1IcCoGmCd6TgsJ%2B%2BeDCOIHl8J7Sl7P%2FyDwP5qyVZgc%2FbsPhIa5H42Z0FNQyQ%2FJqpzb%2B2yQeXXWRfEHOgrSx5Xs%2F1fcT%2BfEpi97ZK0qXfF%2FECuyRRPH%2FbGj7FfoYlfuTf2lxmt%2FNcpxyb3Ucs3Zndme7FUDAsaLmgL69I%2FGwEwRUUshJ%2F5hTUreNUSVbJaeZ6%2FP4n8acxtSruIIMk3nSX0hmtbTtIsKulEqpFefC2cInIZ6bhnZmC7xDMUvgA1Zuk4VqpdQs50ZL3LArQttO4NqQWFT%2BtQ5T%2Brt8Ns4nJMKen%2Fwm86LIeBgZkdf0o2UO%2BIzypLdx5mxgDFNhdCXO5ldOQrrheEgrNy82t5kv5iGpOX7RXnV5eK4CXvBIIy%2Bhy9TrsmndFmQYpg33fZADfxEZ95BzV5AwV7%2Fig1u0b9ENhwQlBomZzEth0ekniuFx6Fg1R71vETlRrXw3wRKSFAE%2BScJJI15hzir%2Bx%2BXmJZW4LpVMD1QM4P4hCe3azEjBlasyCrR2RxHzaCtic0detxKNfDywGi3QzRLPCKK96vhnsiWN7mZ0czpnWrAejXPOoCHsLxHVWr%2B6m3Q6ndacGTMWgeifE2GLPFYm2AWP3LFEKTjJVb0c0yT3VMJ6yyckGOqUB7cFOSqLSfs2cDPIjUAiRuRvWxy2ZuryrsYsH2E9qFGFAULJ80ItuEK7v4APgtc%2Bg4m1McVt2edjRr15h2EzV2wE2Adp%2FlHxWKEq%2BfKH7uut5s74te2J0XxfwzcQdnxkY9SzIm1Q%2FJ4u9ffp0%2Bglbn11vq3Kt9YqhTZtcQEwQNOpcj7k%2BnvIAZxDKFxCCYWumCVrh80LSgq%2BNuSDJKi2Z4vpi%2F7Cu&X-Amz-Signature=5e564c01659b16b5ad14febb6c107d332722eada25f735246d9a88fdc36574b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIY724L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnR8JE6v44znKfzLxswz6NuL7fUmCTwGVYjWRfb2o%2BNAiEAw5zn0HvzCeSRhRZZ2rAC9UEjUPlC3dBd8aQp2B8EOKQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDC%2F96XWywUDHz%2Be8ISrcAzpW1IcCoGmCd6TgsJ%2B%2BeDCOIHl8J7Sl7P%2FyDwP5qyVZgc%2FbsPhIa5H42Z0FNQyQ%2FJqpzb%2B2yQeXXWRfEHOgrSx5Xs%2F1fcT%2BfEpi97ZK0qXfF%2FECuyRRPH%2FbGj7FfoYlfuTf2lxmt%2FNcpxyb3Ucs3Zndme7FUDAsaLmgL69I%2FGwEwRUUshJ%2F5hTUreNUSVbJaeZ6%2FP4n8acxtSruIIMk3nSX0hmtbTtIsKulEqpFefC2cInIZ6bhnZmC7xDMUvgA1Zuk4VqpdQs50ZL3LArQttO4NqQWFT%2BtQ5T%2Brt8Ns4nJMKen%2Fwm86LIeBgZkdf0o2UO%2BIzypLdx5mxgDFNhdCXO5ldOQrrheEgrNy82t5kv5iGpOX7RXnV5eK4CXvBIIy%2Bhy9TrsmndFmQYpg33fZADfxEZ95BzV5AwV7%2Fig1u0b9ENhwQlBomZzEth0ekniuFx6Fg1R71vETlRrXw3wRKSFAE%2BScJJI15hzir%2Bx%2BXmJZW4LpVMD1QM4P4hCe3azEjBlasyCrR2RxHzaCtic0detxKNfDywGi3QzRLPCKK96vhnsiWN7mZ0czpnWrAejXPOoCHsLxHVWr%2B6m3Q6ndacGTMWgeifE2GLPFYm2AWP3LFEKTjJVb0c0yT3VMJ6yyckGOqUB7cFOSqLSfs2cDPIjUAiRuRvWxy2ZuryrsYsH2E9qFGFAULJ80ItuEK7v4APgtc%2Bg4m1McVt2edjRr15h2EzV2wE2Adp%2FlHxWKEq%2BfKH7uut5s74te2J0XxfwzcQdnxkY9SzIm1Q%2FJ4u9ffp0%2Bglbn11vq3Kt9YqhTZtcQEwQNOpcj7k%2BnvIAZxDKFxCCYWumCVrh80LSgq%2BNuSDJKi2Z4vpi%2F7Cu&X-Amz-Signature=277bdc7f1475b9f828a19d8b668b767bebfdbba80bf56fe2739508ff133d9fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

