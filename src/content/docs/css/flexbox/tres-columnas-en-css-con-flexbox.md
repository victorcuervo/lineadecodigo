---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYH4CNT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJm%2BYW70qkhTfz7cXsQRp843fCDVkk2YRD9cMxWTndZAiARH5niTp3%2FGUUfnXyFrbojha95fiKE%2FBVg3u4RoOvaAiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQpMFWA%2BvyYMpkIP%2FKtwDSq1RdJ%2BMO4XW5iqiTFJwL%2B5uNpPkxoGTIpRJvdLlrboqdB%2FW%2F9TWTLkETzBZG7wBJS35T4oHGnMxlfOsyqQtC%2FvpIPhTGNZFEF1zX0LQgfJLa6Bn5uYFvRm4prUhb7SZBaeQzv1kuGtnYbz00mlCTM2dKOrhr%2Bonk5T866o4JSmr2DWoCDobXDmsCxQ%2B%2FPtxFK6h4hUUA0zODz4B61ZjmfRl%2FTa8a%2FORq2MZnDeCAm9ZcqYorQ0lbSQuARAnxeIOu7dus8JXhQ5QgOoFI9JT8XTO1P6I2op%2BVYMIs9psZfkV0latTugIRyk8mvb4TnUTYrFCHE4EhOHum0%2FZg3yVQF5W54gKynHilyeGNJlqUvRH8ku1QmLvTNiIM09HeBCM%2FGUIUpeY9%2BrpvlFFwDTf72FmuRldhwzQUrBcWIRfAx2j3PdCvrPeV7vYPtuE9SgCF1%2B8KtLHF4feCS%2BLgUQPmaW%2By6RSB5ks61IufJtRyW7EnkznrRIVbjjVU0fLFl1aiVidoWOZ1L%2Bn%2BhmElZKSgDhwNGbd67ByqtaY339OOWo6WsNv8KO%2B%2BL9u4hr0H5vWhrJ55Cw0y1hbT0EUQrnq8c1gyaPcOnhvyfzrnIyHV2aRNl7974T11Zwo1UAwzJ3UyQY6pgFF9Q2m9jHsSF0ag2SZUDFd%2FJnF6rVWY1%2Fxmndco66a0xS01XCyJB43QgtVbURI2%2BV%2FViTy6oaEOdK4H8iwLvrAOXpu4%2FHS5FAponU1CUXS3ujYprcc0OjL6Lor7zeBKv%2BaN2u7vx4B0yujxB8KLHX1%2BMCz0ZzqhPHYM7hWtAtwz67vlV6waiA0kVppFI%2Fkfo6T8sjAgB3q0IxDREPflRqMkGlprTqX&X-Amz-Signature=381fa5c8073247a8b5f8b30307830ccb0cd4d634df4638e0c60cc7cd63e1d5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYH4CNT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJm%2BYW70qkhTfz7cXsQRp843fCDVkk2YRD9cMxWTndZAiARH5niTp3%2FGUUfnXyFrbojha95fiKE%2FBVg3u4RoOvaAiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQpMFWA%2BvyYMpkIP%2FKtwDSq1RdJ%2BMO4XW5iqiTFJwL%2B5uNpPkxoGTIpRJvdLlrboqdB%2FW%2F9TWTLkETzBZG7wBJS35T4oHGnMxlfOsyqQtC%2FvpIPhTGNZFEF1zX0LQgfJLa6Bn5uYFvRm4prUhb7SZBaeQzv1kuGtnYbz00mlCTM2dKOrhr%2Bonk5T866o4JSmr2DWoCDobXDmsCxQ%2B%2FPtxFK6h4hUUA0zODz4B61ZjmfRl%2FTa8a%2FORq2MZnDeCAm9ZcqYorQ0lbSQuARAnxeIOu7dus8JXhQ5QgOoFI9JT8XTO1P6I2op%2BVYMIs9psZfkV0latTugIRyk8mvb4TnUTYrFCHE4EhOHum0%2FZg3yVQF5W54gKynHilyeGNJlqUvRH8ku1QmLvTNiIM09HeBCM%2FGUIUpeY9%2BrpvlFFwDTf72FmuRldhwzQUrBcWIRfAx2j3PdCvrPeV7vYPtuE9SgCF1%2B8KtLHF4feCS%2BLgUQPmaW%2By6RSB5ks61IufJtRyW7EnkznrRIVbjjVU0fLFl1aiVidoWOZ1L%2Bn%2BhmElZKSgDhwNGbd67ByqtaY339OOWo6WsNv8KO%2B%2BL9u4hr0H5vWhrJ55Cw0y1hbT0EUQrnq8c1gyaPcOnhvyfzrnIyHV2aRNl7974T11Zwo1UAwzJ3UyQY6pgFF9Q2m9jHsSF0ag2SZUDFd%2FJnF6rVWY1%2Fxmndco66a0xS01XCyJB43QgtVbURI2%2BV%2FViTy6oaEOdK4H8iwLvrAOXpu4%2FHS5FAponU1CUXS3ujYprcc0OjL6Lor7zeBKv%2BaN2u7vx4B0yujxB8KLHX1%2BMCz0ZzqhPHYM7hWtAtwz67vlV6waiA0kVppFI%2Fkfo6T8sjAgB3q0IxDREPflRqMkGlprTqX&X-Amz-Signature=c35a90651bfd4e6ecae81d6757ca572685d188bb2ddad02ae77aa424b3a3c5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

