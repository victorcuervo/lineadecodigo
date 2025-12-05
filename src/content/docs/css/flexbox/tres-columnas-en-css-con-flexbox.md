---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUR2TTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoQd2otkizLyaT6%2FYRxzL5ymqNLb1u9bc8I5wAcP65dAIgBDiVJU6W5r3ar3qZHjAggrJFa7glEacdRPcHltvrZ%2F0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDKoMDzVEKzSyhjMAircA0eNY2eJb1fqmXZb4OJNJCXq%2B3%2FmKq8N6HLozM8fCpdwJoIJ%2Bo35hUA4TmpM00u%2F3AoGmAftEFdeI6Nz%2FdLDiUbocKTpF3TUG3aJNiTeQJb1KIOYWFq%2Bnk9xp9%2FRZPLSgAVScOE3%2FJ3j%2BBhpJ%2FSbyLJmrZ%2FEm8QSH1IX7jBRHpTQ%2F0xYzyzvEyCc%2FF0Zl1TG5t6j3VXN6JeXq0rcPfu%2FIcPd3ruajPegdl5M%2Bg%2FaoiM3Ess7z9mRAdZIfV%2Fw2wn%2BEvqsXb4BuWDmSwOIX%2FxW%2BGcG6tDmEEvLVWjcT8Ea9CfLEox3sxdO88sTMjTB2YrxuMP844Qn59zweTV1qx4OO7ObAQ2php9tostnm3I8VaamPzgx9VM2C46Djr3XX%2FA67E76Y2XrdolO6hT6BiPdn2XECbFZdWLxOSNa2muZgRp9cGzAeeBk52UbkWAI76eL2Xvc5k5Cx7444Ex99OTi6aeD2aBybUK8MyKRVdixEi%2BQrJZF7WPt%2FMzsZkueEghsp24TkZKM4pyFiZCf5fPyANOj2yZNei9hEYgXR10vABKb0vTYCnu%2BHsNlOcDiB6j6pp11ww%2FsNFx9s%2Fk%2BdvykwYFgmhclzlRyKeLzi%2FfCNR1AAWSb0qJYvbcF1GyyMN7MyskGOqUByNwmka416v0ucIHyRsJXmaYEExM%2FdnlLsBMfHmZvIrj7lelQTflglcslJe6HE2vmtfrxHv92XoABpj3icfzsMUfrQ3Zv3HmLV0%2FhFFMYaxNKVgjjFTtIhv1z5mEdbsl%2BZHOKO7pBROJv1kJXuwk3Wbu%2BSQInFb9knZTgnaha5iSQ2Dgy%2Bs4WDNofHa3xMpd6hUvnSTzgKBNpYxnKVFUBc9d0avDK&X-Amz-Signature=9ccf5c39dad968e5c8002b31a751d5cab2fec9d00648843911aca817a6b51597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUR2TTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoQd2otkizLyaT6%2FYRxzL5ymqNLb1u9bc8I5wAcP65dAIgBDiVJU6W5r3ar3qZHjAggrJFa7glEacdRPcHltvrZ%2F0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDKoMDzVEKzSyhjMAircA0eNY2eJb1fqmXZb4OJNJCXq%2B3%2FmKq8N6HLozM8fCpdwJoIJ%2Bo35hUA4TmpM00u%2F3AoGmAftEFdeI6Nz%2FdLDiUbocKTpF3TUG3aJNiTeQJb1KIOYWFq%2Bnk9xp9%2FRZPLSgAVScOE3%2FJ3j%2BBhpJ%2FSbyLJmrZ%2FEm8QSH1IX7jBRHpTQ%2F0xYzyzvEyCc%2FF0Zl1TG5t6j3VXN6JeXq0rcPfu%2FIcPd3ruajPegdl5M%2Bg%2FaoiM3Ess7z9mRAdZIfV%2Fw2wn%2BEvqsXb4BuWDmSwOIX%2FxW%2BGcG6tDmEEvLVWjcT8Ea9CfLEox3sxdO88sTMjTB2YrxuMP844Qn59zweTV1qx4OO7ObAQ2php9tostnm3I8VaamPzgx9VM2C46Djr3XX%2FA67E76Y2XrdolO6hT6BiPdn2XECbFZdWLxOSNa2muZgRp9cGzAeeBk52UbkWAI76eL2Xvc5k5Cx7444Ex99OTi6aeD2aBybUK8MyKRVdixEi%2BQrJZF7WPt%2FMzsZkueEghsp24TkZKM4pyFiZCf5fPyANOj2yZNei9hEYgXR10vABKb0vTYCnu%2BHsNlOcDiB6j6pp11ww%2FsNFx9s%2Fk%2BdvykwYFgmhclzlRyKeLzi%2FfCNR1AAWSb0qJYvbcF1GyyMN7MyskGOqUByNwmka416v0ucIHyRsJXmaYEExM%2FdnlLsBMfHmZvIrj7lelQTflglcslJe6HE2vmtfrxHv92XoABpj3icfzsMUfrQ3Zv3HmLV0%2FhFFMYaxNKVgjjFTtIhv1z5mEdbsl%2BZHOKO7pBROJv1kJXuwk3Wbu%2BSQInFb9knZTgnaha5iSQ2Dgy%2Bs4WDNofHa3xMpd6hUvnSTzgKBNpYxnKVFUBc9d0avDK&X-Amz-Signature=2604cf86d4d244598b7a62cd7ac2ce200be0364f3a2a98454ddc42a6bd74d488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

