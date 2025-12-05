---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHG7XOY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKk2rkPpOaEyDwfofAyT%2BtPbapBMIqUjv9gMxaGoI%2B8AiEApc4IcymbopP%2BpguwW%2Fa0A8N3Hv9sLg0F3suPwg61mKwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEXskOGlvi%2FDk7m1%2BSrcA%2FuuDxrnqvggODjziAJFQ4CzzDf31XHBXVR73c1fag4UBkK9ZEFd8VznqMFUl6%2Fff53e7tIZSwKx3FePwLgf2S1%2BR50sYZ9nPoRiuE2UNnYgaN6510ASLMsbmnQw%2B1r4LvShELERRlYUji0KfEBxkv5WpL%2B5Xb2JUJlAiwROyB0SXq1JpLCK%2F1bcdO2Y2vzebTpwH3lfmVI5xmwaA1ymLI050awVwio8a8AsTosU0Li32w0aaDGyoMZJCZxyHhPJgyS7WWZzDgnnIKJ%2FghQ5Mo1mYADHIf8P2mvLV16Wlqb2aYP2i5lr0DX%2F5HcO0P1rVXwm%2BYaW8SBrPhQLUsVzrxvNQ5vvy4AhbvYX5q9p7jpEQ2XWD74oCs5AJSpHfRKs6gXSB94te9uRw5PDlVXRnJHiALlWdKoLq%2F3ZmeRTxqVZgVNK82AeEqWPDSMwK1ScQPB8qWF%2FWp1v8M9tyRjDRi9aJ92UYs1OWs5yEycxW973ZytDv8arhVUPgUSiOajZAwUv6PjjTYPBG2lwtaaJajwU42tOBgYtJCImivDr9OpPavCISzpMyRkKCq1ec1Qs4kIu80raH4pF7vJmW%2B0JT2NN%2BgDbRpTieb4wv2B7lCNphzOei2cYIVfk%2B8UNMPTPyskGOqUBssPApD1XkPC5jHpK4rbdeCdzZW3V6JP7uGpi98vSmtd1eJwzOn%2FGYSscD1CopOptIzG7kgFUdmTQQzftHVfHvlJlOZz9JpiDRG4Iy%2BNfIzsv0IijZ7tvEwZWNldp8M3plBmDFY67Db0qvE0P3b9tH%2BsRYAig%2FVKppgnK1uhVaoj7uk4EM9pXmeh1SXEn8R%2Be95D%2BAEHSfQdvBpnAXZPGnGPH%2BSAi&X-Amz-Signature=92caca92509740eb890515ef3542ff4beb27333fc1facf9de4b724342deecc90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHG7XOY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKk2rkPpOaEyDwfofAyT%2BtPbapBMIqUjv9gMxaGoI%2B8AiEApc4IcymbopP%2BpguwW%2Fa0A8N3Hv9sLg0F3suPwg61mKwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEXskOGlvi%2FDk7m1%2BSrcA%2FuuDxrnqvggODjziAJFQ4CzzDf31XHBXVR73c1fag4UBkK9ZEFd8VznqMFUl6%2Fff53e7tIZSwKx3FePwLgf2S1%2BR50sYZ9nPoRiuE2UNnYgaN6510ASLMsbmnQw%2B1r4LvShELERRlYUji0KfEBxkv5WpL%2B5Xb2JUJlAiwROyB0SXq1JpLCK%2F1bcdO2Y2vzebTpwH3lfmVI5xmwaA1ymLI050awVwio8a8AsTosU0Li32w0aaDGyoMZJCZxyHhPJgyS7WWZzDgnnIKJ%2FghQ5Mo1mYADHIf8P2mvLV16Wlqb2aYP2i5lr0DX%2F5HcO0P1rVXwm%2BYaW8SBrPhQLUsVzrxvNQ5vvy4AhbvYX5q9p7jpEQ2XWD74oCs5AJSpHfRKs6gXSB94te9uRw5PDlVXRnJHiALlWdKoLq%2F3ZmeRTxqVZgVNK82AeEqWPDSMwK1ScQPB8qWF%2FWp1v8M9tyRjDRi9aJ92UYs1OWs5yEycxW973ZytDv8arhVUPgUSiOajZAwUv6PjjTYPBG2lwtaaJajwU42tOBgYtJCImivDr9OpPavCISzpMyRkKCq1ec1Qs4kIu80raH4pF7vJmW%2B0JT2NN%2BgDbRpTieb4wv2B7lCNphzOei2cYIVfk%2B8UNMPTPyskGOqUBssPApD1XkPC5jHpK4rbdeCdzZW3V6JP7uGpi98vSmtd1eJwzOn%2FGYSscD1CopOptIzG7kgFUdmTQQzftHVfHvlJlOZz9JpiDRG4Iy%2BNfIzsv0IijZ7tvEwZWNldp8M3plBmDFY67Db0qvE0P3b9tH%2BsRYAig%2FVKppgnK1uhVaoj7uk4EM9pXmeh1SXEn8R%2Be95D%2BAEHSfQdvBpnAXZPGnGPH%2BSAi&X-Amz-Signature=54d62c3eb583924e98fbd0772d4f19d05e7c9320136aa3184da29faf989b7a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

