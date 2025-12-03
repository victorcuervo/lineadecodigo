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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRODT4DW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF3%2BNKRjDxfYSkt6PbVozNl2xat72%2FAJ5vhtTrFXHzHUAiBbklQHwB2RJEX47bAR9s8xhJ646eCAYmB%2Fscj3GI7EASr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMN1UqaPR8sVkAOPMWKtwDdpH2M5adfMQKXtyUx01ZEKwIq0k8UIG9jHNMHFom16G0Sjht4aXhp1SqwrCulT5J5zK1wCyZFAape5mWtKeQxT22vpvtvEr5es9AJCmt%2FCPegLaHxFBYy3Z9gHVkroyFLn%2F61qvMp%2Fl6NoWrn1WBaIyOfK4HGt7BTk5SrQ4Bp6VTzTImVS8HXhTXJVWFEuaktOGaqNlG0lReUoZ4nFI701Vc4n%2BD%2FByhUUqKWUbObIdZIoQudr6OjivmvJxgmIKUsVKhGsPucS%2FoYQMF2xMeI6NZXq2EySq3SZIQXBzBt8sm1bfW36Y4K1IqJOFCYj3cjU%2FD%2B35KWCsYapY7Ow5ckqBkT8l4SnpHcOU7WY%2FxqzPXpQkjmvhE3Vx5B%2BgCXZ4TRn52j7noqXZqR31rVsOGpVpII0Xgq4tbrc3OaDz%2FDDwS8cBy3mM%2BOqtrtJEb0vw4g7z109mvAFotg%2FED0KyD6BVPBF3ZbFSyOvdYdfwIovoqUTLjqcVmIv1aqeJ81b6XFVIjbwRy1LpEWJgyesgf47SoTpRzU0M46oTzmpL2Hizjmr8a8cfp7%2FNC88WVnJTe%2B2KAa1qok%2FpxAd2DgRQiO%2BwzVqqWrs0j2FI498%2Bxxgd8%2BDQTabh4Do8kSY0wr5a%2ByQY6pgGPZBr3cXBJ%2FQlZhss53TbbOVa4E%2B2Qy1Tr7TF7DtfYD%2FxshsEdQH316FT4eB%2FRPxLsXRN1yv20q1TOtZ3KR3LLG5is5L7U%2BRZC%2BMoziqqG85RQTgRiXkXQViO3jGEPvWrmGA5oh1LNM2HITzHX0M1Y2tDS0ydx1K%2BqrIby97l9YOplZQMrBfDbBN%2FGHYpDUWQz%2FpvbQ2W00HQRvjRKhYhmMmHu2JKO&X-Amz-Signature=0816d03d50eb37c2b10fe4233c3e5b355f44c32552533de74d841fc55c016568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRODT4DW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF3%2BNKRjDxfYSkt6PbVozNl2xat72%2FAJ5vhtTrFXHzHUAiBbklQHwB2RJEX47bAR9s8xhJ646eCAYmB%2Fscj3GI7EASr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMN1UqaPR8sVkAOPMWKtwDdpH2M5adfMQKXtyUx01ZEKwIq0k8UIG9jHNMHFom16G0Sjht4aXhp1SqwrCulT5J5zK1wCyZFAape5mWtKeQxT22vpvtvEr5es9AJCmt%2FCPegLaHxFBYy3Z9gHVkroyFLn%2F61qvMp%2Fl6NoWrn1WBaIyOfK4HGt7BTk5SrQ4Bp6VTzTImVS8HXhTXJVWFEuaktOGaqNlG0lReUoZ4nFI701Vc4n%2BD%2FByhUUqKWUbObIdZIoQudr6OjivmvJxgmIKUsVKhGsPucS%2FoYQMF2xMeI6NZXq2EySq3SZIQXBzBt8sm1bfW36Y4K1IqJOFCYj3cjU%2FD%2B35KWCsYapY7Ow5ckqBkT8l4SnpHcOU7WY%2FxqzPXpQkjmvhE3Vx5B%2BgCXZ4TRn52j7noqXZqR31rVsOGpVpII0Xgq4tbrc3OaDz%2FDDwS8cBy3mM%2BOqtrtJEb0vw4g7z109mvAFotg%2FED0KyD6BVPBF3ZbFSyOvdYdfwIovoqUTLjqcVmIv1aqeJ81b6XFVIjbwRy1LpEWJgyesgf47SoTpRzU0M46oTzmpL2Hizjmr8a8cfp7%2FNC88WVnJTe%2B2KAa1qok%2FpxAd2DgRQiO%2BwzVqqWrs0j2FI498%2Bxxgd8%2BDQTabh4Do8kSY0wr5a%2ByQY6pgGPZBr3cXBJ%2FQlZhss53TbbOVa4E%2B2Qy1Tr7TF7DtfYD%2FxshsEdQH316FT4eB%2FRPxLsXRN1yv20q1TOtZ3KR3LLG5is5L7U%2BRZC%2BMoziqqG85RQTgRiXkXQViO3jGEPvWrmGA5oh1LNM2HITzHX0M1Y2tDS0ydx1K%2BqrIby97l9YOplZQMrBfDbBN%2FGHYpDUWQz%2FpvbQ2W00HQRvjRKhYhmMmHu2JKO&X-Amz-Signature=d9229051e45ac1bd14ffd5a8cf338873c454a3b69b29bb311251f78c0dac40b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

