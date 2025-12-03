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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDMI34R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGP5NXRWT4woA0kJbLGegzsKz87wN51IJ0z9mh1Y06uHAiEA1NRUP186thLZgoyjWArBJGl8qNI8lHx7gQ%2FdR1gwLOsq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGQ0BcRq24muA2C45SrcA9%2BNFp5v4A8sog6jV5KpPUR03djfJiyGwMbHpKfZ6NQpHI0VfXnhmmK0wzBD6I3rryriRza8AUZ1Z3IFtnlMhqaJlKK6cESeAXXXvwhIqD%2F6QFJ0RAXFSZTrFMdRVeNUFBx3nv9miEMnWXkMWRcQzxRo%2ByPkJLqxrC7%2FRYr%2Fun85R5ssOeAb7xm9UEafX5dCRqKDOQiMkm7ARNsGOSnFKmZY0a8U%2BVXFvEz4DsqDY2MQrqhZfct2AJoQBMkSBtTK1z7XzpA1tDKSqjTFz1XP4KJ1Ev12oQJV5gCUjMI29OAMEY9xsfgjBnVBqK2V5XUsNzgst%2BnQLgaS4PwKgGY%2FFR1jUQuwW6VXSEJXrcDOMTcBQ95SGt4nvh4LUjl6lQMQhNb1K7tIXgtleDxZwEv%2BC7uVOECpc2xUnrjMys2qTgt4j4eRloH5Gl48ZILQKOD2cqwagWHpLzOj2C9K%2BVS4bLzlvE4MbMMzZR9k9Z7OoW9wMaj7hVqTxeSbg8OgZGFz7P3l7wh8tXXuWCBSFLftJ9xh5MeX%2BOvjqJKq5jPOW%2Fy9Lv%2FsQlSaIF84M3vHVU7a5D%2BIUwkuN6yOjPRPUah2uZ6r%2BSrO6t4%2BdKeNT4LpoNicuE0y32Z3DgmKOnH%2FMIj%2FvckGOqUBznVihgm2x05UgYazjpiiCaomaCFniGub%2BOGEsTO2CTc%2FKTic%2FbTrBEAsxF9Q8ss6LHvV2GAYHmL5xDP45kNkhtmTGcz0NwJ58qxPQCdbYaVinqCzg1A67%2Fb5pMTKrQ%2BeuFdHWGKKqhbzzjVpIitcfme7YFe4sfFsCOqMWNCi0Z48UD4JILaWlAMJEH5pUK9A07%2BGLRMsgIt8cR3MhlEv2N70cFsS&X-Amz-Signature=3c87aaa2a8c883a036576ae2a90d48c861f29f44cd7f1311459b178c071c7b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDMI34R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGP5NXRWT4woA0kJbLGegzsKz87wN51IJ0z9mh1Y06uHAiEA1NRUP186thLZgoyjWArBJGl8qNI8lHx7gQ%2FdR1gwLOsq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGQ0BcRq24muA2C45SrcA9%2BNFp5v4A8sog6jV5KpPUR03djfJiyGwMbHpKfZ6NQpHI0VfXnhmmK0wzBD6I3rryriRza8AUZ1Z3IFtnlMhqaJlKK6cESeAXXXvwhIqD%2F6QFJ0RAXFSZTrFMdRVeNUFBx3nv9miEMnWXkMWRcQzxRo%2ByPkJLqxrC7%2FRYr%2Fun85R5ssOeAb7xm9UEafX5dCRqKDOQiMkm7ARNsGOSnFKmZY0a8U%2BVXFvEz4DsqDY2MQrqhZfct2AJoQBMkSBtTK1z7XzpA1tDKSqjTFz1XP4KJ1Ev12oQJV5gCUjMI29OAMEY9xsfgjBnVBqK2V5XUsNzgst%2BnQLgaS4PwKgGY%2FFR1jUQuwW6VXSEJXrcDOMTcBQ95SGt4nvh4LUjl6lQMQhNb1K7tIXgtleDxZwEv%2BC7uVOECpc2xUnrjMys2qTgt4j4eRloH5Gl48ZILQKOD2cqwagWHpLzOj2C9K%2BVS4bLzlvE4MbMMzZR9k9Z7OoW9wMaj7hVqTxeSbg8OgZGFz7P3l7wh8tXXuWCBSFLftJ9xh5MeX%2BOvjqJKq5jPOW%2Fy9Lv%2FsQlSaIF84M3vHVU7a5D%2BIUwkuN6yOjPRPUah2uZ6r%2BSrO6t4%2BdKeNT4LpoNicuE0y32Z3DgmKOnH%2FMIj%2FvckGOqUBznVihgm2x05UgYazjpiiCaomaCFniGub%2BOGEsTO2CTc%2FKTic%2FbTrBEAsxF9Q8ss6LHvV2GAYHmL5xDP45kNkhtmTGcz0NwJ58qxPQCdbYaVinqCzg1A67%2Fb5pMTKrQ%2BeuFdHWGKKqhbzzjVpIitcfme7YFe4sfFsCOqMWNCi0Z48UD4JILaWlAMJEH5pUK9A07%2BGLRMsgIt8cR3MhlEv2N70cFsS&X-Amz-Signature=867ca15680076decf653b6ce15dfa0b1891653724c19cc40db60c7f38cdcbeb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

