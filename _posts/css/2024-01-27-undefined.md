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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLDRUZ6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEQeyIG0fGxNagQS826YXMaQpwFAqqqKdsmA0sRtJad3AiEAtgO2apRx5p%2F8x0s5JithjuBC%2FXFbdspVLiHolTFkHaIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMLIWF4kiv1ORqKKtSrcA4K8gpTnxAhs%2BDY%2FdkqYrWegMu1wGP2l%2FKguHWAct%2Bmr5d0rxreMtVFwGrVxhVZXuZSOoWB76B04VlZ3LIhXIJ5e%2FDzlA%2FE5Cp31AkX0kisZY8de2pGHi1kK6HbaEVo%2FkDPyamPVXBXt%2F6JCz%2F8XqD9ye%2FFRaFUJCEyiW0ftQjC8P93SepyPGNFLTHterXHFZ%2BBsBovstye2WdDND531KhcfWwaXzfoGzqq%2Bg8ycU0ye0aSX1qMBlXNhAw1X%2FmWtB2rhG0sBLuGQTL4zedugUqBxsQzpiR95o2mIg59%2BZRcFZ14pcpAgc9UPoN%2FLRQtG6CtAaHCNmj4am%2BrCs8NisI5VAg2a2SEFVnMBozoplwtozX6YCD1fNdXlhgKxjLvI0ErH%2FcYXJGjt537hjNYVRB%2FZMDtLzD9nh8JSSvivPH3%2BIjyfq2k2vcxnPbr71lixZ70zYtCw2XF%2B4jx6UOgNfKCYqKgQFAn8k5EyShIsjufzGmot4Mwmq0aHoeD%2BoQ6zJLAIgnwswZH7Ms%2FDhusxsay9AE2UqGOCoy8yg0GU7YNrCxTLBCTaJubR604YTWVeYEALFWHTPdV9ynWYghS0RbWT9aEtEnamNcvQKT9PS%2FapG5kqNsj51BXtmX7XMJaXvskGOqUB4ONg4S6jai7o0pI%2FsTtOGM%2FcjP%2FkVCoiluRs01gWMvu8uhUcoA7jXJcyofnhA3ojyLFhF1tDBONQq7gLSzv1O%2FA6jzllTouq2QcAMiHeR%2B9%2FBYrwbrmbS0iAjLXIaE%2F5w4i%2B6GlY%2FvEOdM5PJKnfhgX395yzdBGc%2FKRfy0bRylJXOnMOpac2%2FpLH%2FD6xNA9P2AZPNo2XoCGecuIkdKpXlaq40C1m&X-Amz-Signature=bcfff084ee264c50833170779858023f06d421584517d4a66470401556f014eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLDRUZ6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEQeyIG0fGxNagQS826YXMaQpwFAqqqKdsmA0sRtJad3AiEAtgO2apRx5p%2F8x0s5JithjuBC%2FXFbdspVLiHolTFkHaIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMLIWF4kiv1ORqKKtSrcA4K8gpTnxAhs%2BDY%2FdkqYrWegMu1wGP2l%2FKguHWAct%2Bmr5d0rxreMtVFwGrVxhVZXuZSOoWB76B04VlZ3LIhXIJ5e%2FDzlA%2FE5Cp31AkX0kisZY8de2pGHi1kK6HbaEVo%2FkDPyamPVXBXt%2F6JCz%2F8XqD9ye%2FFRaFUJCEyiW0ftQjC8P93SepyPGNFLTHterXHFZ%2BBsBovstye2WdDND531KhcfWwaXzfoGzqq%2Bg8ycU0ye0aSX1qMBlXNhAw1X%2FmWtB2rhG0sBLuGQTL4zedugUqBxsQzpiR95o2mIg59%2BZRcFZ14pcpAgc9UPoN%2FLRQtG6CtAaHCNmj4am%2BrCs8NisI5VAg2a2SEFVnMBozoplwtozX6YCD1fNdXlhgKxjLvI0ErH%2FcYXJGjt537hjNYVRB%2FZMDtLzD9nh8JSSvivPH3%2BIjyfq2k2vcxnPbr71lixZ70zYtCw2XF%2B4jx6UOgNfKCYqKgQFAn8k5EyShIsjufzGmot4Mwmq0aHoeD%2BoQ6zJLAIgnwswZH7Ms%2FDhusxsay9AE2UqGOCoy8yg0GU7YNrCxTLBCTaJubR604YTWVeYEALFWHTPdV9ynWYghS0RbWT9aEtEnamNcvQKT9PS%2FapG5kqNsj51BXtmX7XMJaXvskGOqUB4ONg4S6jai7o0pI%2FsTtOGM%2FcjP%2FkVCoiluRs01gWMvu8uhUcoA7jXJcyofnhA3ojyLFhF1tDBONQq7gLSzv1O%2FA6jzllTouq2QcAMiHeR%2B9%2FBYrwbrmbS0iAjLXIaE%2F5w4i%2B6GlY%2FvEOdM5PJKnfhgX395yzdBGc%2FKRfy0bRylJXOnMOpac2%2FpLH%2FD6xNA9P2AZPNo2XoCGecuIkdKpXlaq40C1m&X-Amz-Signature=f10532e5de0ef1093d8df602a6505b025fa804b8d817a24e37b3cf297e4dcc5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

