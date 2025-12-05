---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STH736G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKn8zunHvtt2he8nEwR1aaTeDMJjvV9Ju2mTidD8MY1AiEA7k4pNBnsnEQMCIeshmzHy2hpe9pCY0uDydPB4vwKOmAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNxHgYW2qiwxKXMsMSrcA3lM6XxywXpEsmK06MvBK%2FQNOovjcHvuvbkG9vd2KcwTe3%2FHwGIYxPiksiQPsluQZRavpeRvr2Ek3sgaukxkEEhr8t%2BFg2k0RcrIzmlRaBg0EqmK6%2BPSdFBo3aOggmWMoQG6UjNzP0JCqN0zXiNZOuTyA6Vnu7jieCYoAEHwTLOhwA61zO1DKuHqNjMf6FxRZfULS875%2FjcqJ4VEKuI7bJK6aTB6r6QcrFpJS%2Blsseh1gF5ocH0ftKnwiz5HlPFyE9PRrjSWFlWKnRilisp7AlBX3p7CqMjbAeokcqFQvnopyP61PODPiyKSvr3aD0A9Um0%2BBSXhLBX6nwks%2Fqyefru%2B0Q6hyUhY%2FjSVAqESQveNq3v3yE9V8wbDSBCDsV3PJnh%2Bkp8np6A3M8H83S8bjaNrXerhZZy6J1YdZ5S63ZztI6KnKYg35KoGF46JMgwRMOdZJ1Yp6WfDaCv6rcCO08VGpgad59R%2BSHdH%2F7DUprXXdNAhFevxpQoPGR2Sc5UuXSKTW1X5DUTWzw64KFee3cDSr6Lzr%2B7c1PsUy0ksNNNGy0PwAslm%2BXha6JWK7hJGGg66I58nd9R4EjXs27%2BEcfYhoWkNwaRs66a%2BCNHl0pI%2Bt4tLvtCo%2BPl3ZQlmMO%2BGzckGOqUBmT0UKR36E1rF13KfVWCI9xxSIttF4q8aRsC%2BaQbUc0%2BtuAbU1AcwHvmMjIAnjWKyEzy%2FnCj4s3hk9QVgYKMrYtHys7VFRgjOaBWzcxguV3P67z2Np9fZREuZyp4kZ0%2BFjkcmUWJTI73sJEqJGfFGUObcKpBoXhSAwYHZMV%2B0fcO3Q9q6aKV0Bmwt%2B%2FyCtYNAZlupc2FtJON%2BcOYCN8ngWukQKRBf&X-Amz-Signature=1d6f42ae124e2a2d738b1a2457c244a15c0ee93e41a386e901c665f2378a9a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STH736G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKn8zunHvtt2he8nEwR1aaTeDMJjvV9Ju2mTidD8MY1AiEA7k4pNBnsnEQMCIeshmzHy2hpe9pCY0uDydPB4vwKOmAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNxHgYW2qiwxKXMsMSrcA3lM6XxywXpEsmK06MvBK%2FQNOovjcHvuvbkG9vd2KcwTe3%2FHwGIYxPiksiQPsluQZRavpeRvr2Ek3sgaukxkEEhr8t%2BFg2k0RcrIzmlRaBg0EqmK6%2BPSdFBo3aOggmWMoQG6UjNzP0JCqN0zXiNZOuTyA6Vnu7jieCYoAEHwTLOhwA61zO1DKuHqNjMf6FxRZfULS875%2FjcqJ4VEKuI7bJK6aTB6r6QcrFpJS%2Blsseh1gF5ocH0ftKnwiz5HlPFyE9PRrjSWFlWKnRilisp7AlBX3p7CqMjbAeokcqFQvnopyP61PODPiyKSvr3aD0A9Um0%2BBSXhLBX6nwks%2Fqyefru%2B0Q6hyUhY%2FjSVAqESQveNq3v3yE9V8wbDSBCDsV3PJnh%2Bkp8np6A3M8H83S8bjaNrXerhZZy6J1YdZ5S63ZztI6KnKYg35KoGF46JMgwRMOdZJ1Yp6WfDaCv6rcCO08VGpgad59R%2BSHdH%2F7DUprXXdNAhFevxpQoPGR2Sc5UuXSKTW1X5DUTWzw64KFee3cDSr6Lzr%2B7c1PsUy0ksNNNGy0PwAslm%2BXha6JWK7hJGGg66I58nd9R4EjXs27%2BEcfYhoWkNwaRs66a%2BCNHl0pI%2Bt4tLvtCo%2BPl3ZQlmMO%2BGzckGOqUBmT0UKR36E1rF13KfVWCI9xxSIttF4q8aRsC%2BaQbUc0%2BtuAbU1AcwHvmMjIAnjWKyEzy%2FnCj4s3hk9QVgYKMrYtHys7VFRgjOaBWzcxguV3P67z2Np9fZREuZyp4kZ0%2BFjkcmUWJTI73sJEqJGfFGUObcKpBoXhSAwYHZMV%2B0fcO3Q9q6aKV0Bmwt%2B%2FyCtYNAZlupc2FtJON%2BcOYCN8ngWukQKRBf&X-Amz-Signature=9e17a35d74e75cba5210c8e2a4ea128561433e672712387097974308680fcb59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

