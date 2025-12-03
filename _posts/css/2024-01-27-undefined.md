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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAH2DQ4F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAU05cq6ZK4%2BT%2FPwEo39GiJvEI%2FBgDnRZ42efjVP0hKgIgAmZVHJB9NC1olaP7uSTAdzS%2BPPzjWk6sfZICHXRwSdEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDD6s3tDv9A04Vd%2FwYCrcA9er5RFFA%2FpxrsGlODJ8YxqaXsI7lwqRXanMjnLQnVHFzgIHdYSx1Et6a9EcDot2c7nnazGtKHs14qr%2Fi1yY1LpD7genKNQK76RCh4on5Otdd0UN1rUjbmhjGAr%2BJJ9k1T%2FIaL6huuLzBsDwLTAQ%2BYPArZBo8G81OsqvLkQwGuMcUV9eBIfPi6pmlQDj82XbFeNaIXexaEXdO83GgaV%2FqZtXAsRBZKtZT%2BmmuiaAzx%2F9BmlKBh3biY2%2BCXNl7lSwSWsscOmhqPsNmBXQR0yLOa143h40ODhUT7XnatJlZdB%2B7h6NGGlVD7m3yAvP45UdJRcZaf2RmutJO6ykqvl00JW49Se3%2BXOjAZ3DDUgWHwlLzZE9G11Tcqwdc5GV%2BY1GhfNe1lw7oCMAkbGAi4bpwSROn9reE24SWJpzLmrHN1gTQvMuLwQgd07O%2FSxHtNseChuWcnNUnJjzJ6%2Bsra2r2DacOA%2Be1u4rSrstikC8TypDmYBP5%2FitjW20SvJO3VO0svaPnoTLL8pgGe4OV66FtmieOJ6YoBczPj4JEycnGKEZNiwu61vTSMHygz45J5511v8%2BjD34FRvx%2FPCvY%2BTqrKeopuBeb9kjkRpsWBsKvNMLjRszKsyz%2BJC3o7DYMKrpwMkGOqUB9%2FL0qjVituvCHGNSMQAko2gxtJ0JaVyPBs4HxINZIHYHtz7OeEf4zdnySEIr62BNUVcFXPELZ4hAMxqUz3XZVhDxf3U3oIyEvGCKZz3VKbUkiIjlwzKu9hgpd%2Fy4fvt%2FWPFvA3gC2fNoYzLopOM1sfHBaTPonOjBGlY9PUi%2Bv5xUlf0Q%2FxDufU9ljDOEM4UCtIN9FKmIaXoNiIq%2FnHCczBth%2FTJC&X-Amz-Signature=45e755b32b4ef4fdcc7c395685e24607f7db05a5df1cb02e4ecaec5f62102d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAH2DQ4F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAU05cq6ZK4%2BT%2FPwEo39GiJvEI%2FBgDnRZ42efjVP0hKgIgAmZVHJB9NC1olaP7uSTAdzS%2BPPzjWk6sfZICHXRwSdEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDD6s3tDv9A04Vd%2FwYCrcA9er5RFFA%2FpxrsGlODJ8YxqaXsI7lwqRXanMjnLQnVHFzgIHdYSx1Et6a9EcDot2c7nnazGtKHs14qr%2Fi1yY1LpD7genKNQK76RCh4on5Otdd0UN1rUjbmhjGAr%2BJJ9k1T%2FIaL6huuLzBsDwLTAQ%2BYPArZBo8G81OsqvLkQwGuMcUV9eBIfPi6pmlQDj82XbFeNaIXexaEXdO83GgaV%2FqZtXAsRBZKtZT%2BmmuiaAzx%2F9BmlKBh3biY2%2BCXNl7lSwSWsscOmhqPsNmBXQR0yLOa143h40ODhUT7XnatJlZdB%2B7h6NGGlVD7m3yAvP45UdJRcZaf2RmutJO6ykqvl00JW49Se3%2BXOjAZ3DDUgWHwlLzZE9G11Tcqwdc5GV%2BY1GhfNe1lw7oCMAkbGAi4bpwSROn9reE24SWJpzLmrHN1gTQvMuLwQgd07O%2FSxHtNseChuWcnNUnJjzJ6%2Bsra2r2DacOA%2Be1u4rSrstikC8TypDmYBP5%2FitjW20SvJO3VO0svaPnoTLL8pgGe4OV66FtmieOJ6YoBczPj4JEycnGKEZNiwu61vTSMHygz45J5511v8%2BjD34FRvx%2FPCvY%2BTqrKeopuBeb9kjkRpsWBsKvNMLjRszKsyz%2BJC3o7DYMKrpwMkGOqUB9%2FL0qjVituvCHGNSMQAko2gxtJ0JaVyPBs4HxINZIHYHtz7OeEf4zdnySEIr62BNUVcFXPELZ4hAMxqUz3XZVhDxf3U3oIyEvGCKZz3VKbUkiIjlwzKu9hgpd%2Fy4fvt%2FWPFvA3gC2fNoYzLopOM1sfHBaTPonOjBGlY9PUi%2Bv5xUlf0Q%2FxDufU9ljDOEM4UCtIN9FKmIaXoNiIq%2FnHCczBth%2FTJC&X-Amz-Signature=e0fc75b38f20af61521193d3ba9e334fe2d3eaea2ff2d37a8a79f3a079f9f1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

