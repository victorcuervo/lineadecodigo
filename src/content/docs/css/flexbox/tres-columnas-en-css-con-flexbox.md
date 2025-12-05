---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5LDEOER%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByurbOUkKQEzgh1hNIA0wRFmH22XFeAIBmMKIk3whPbAiEAoweLwf4HFAd7WHyxAJZY94gfGiq9CCrDYBPv4onb6Asq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG7hdpgbm5sVPis8vCrcA%2FENEGd4NqMnNIjCXnj3Zp4F3dCr8yiyFO17zXeuGBvqrw1IJhoLLyLBANqNoT3VJ4fgDdDAjjW0MQ1JCBYFJoDBh2UJHWMq3sXzPn6OdcPnKGR54m1wGiLKdvVuIHAdvBaV0nJKSQz54g1IG6L1I1oQycWXMBZaJByDW141Nk2N03%2FnabMivzXTWNHLhSeECnPSYdjZuP%2BfEiU7ZFeUbu3RfI7%2FbJeAMTAIZIH4t%2BE9ye6X4HOKE4s5P05yVKN33DDtARHJFrZG5AmMGjCaWLMVr2TDZNurDos5%2FsAZlhcjvq6d%2BOSg70djC3zXQruSqIUVWS6x4KVNzd8s5bNMhtE62KyUV%2BwI82C%2B%2FaX5AMsJnCRDk%2FJBqIkaj%2FOP4KP9R%2Brd6Mu8NheKkIXv5jCVuGeTUUp9v0LZtu6GkyvH%2BOas1Mysoh9Mdao%2B%2B2XaBAPlh6SfFly92OoLNjg8RsIU%2B%2FstPXyu5eZHRnPo0gbFGTfBQubP%2FqUL7iEjypB8rpe%2BSp4sHjg9u0EoWAKgmU7cIyvL%2BTy9gHPkP8B3z6tkZqb1c4VoD5HyfOnMc%2BKkmsKRCCNVPQKfkY1a6mIOydMQrYYqnxRTiKe7Fj1%2FlMji5g9wYgtcpeSRffWPfQVCMLiDzckGOqUBl5HOAYgCIgwytJTgkgJrXMfuvXQbwzRG9uEJ%2BXctS5YiV4sGJcArHcLS9ykvi1%2B2uycP5JNSehtJgQshEuLElKTxQLbq5y%2BFM3VOXi94UXIIKR%2By%2Bi2QTux1IPME4yO7O%2BeshnC9G1BmymxSkAChD5LCOK1mTNk9veOoERR8JavcZYKTXRQOSc%2FMuTQHwDK7rCeilb9MxK13EBJbjJAwL9OHsbx4&X-Amz-Signature=e281760ba78582efc69e5366c7453a74de0cf7f67045e1954df43e86a4730ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5LDEOER%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByurbOUkKQEzgh1hNIA0wRFmH22XFeAIBmMKIk3whPbAiEAoweLwf4HFAd7WHyxAJZY94gfGiq9CCrDYBPv4onb6Asq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG7hdpgbm5sVPis8vCrcA%2FENEGd4NqMnNIjCXnj3Zp4F3dCr8yiyFO17zXeuGBvqrw1IJhoLLyLBANqNoT3VJ4fgDdDAjjW0MQ1JCBYFJoDBh2UJHWMq3sXzPn6OdcPnKGR54m1wGiLKdvVuIHAdvBaV0nJKSQz54g1IG6L1I1oQycWXMBZaJByDW141Nk2N03%2FnabMivzXTWNHLhSeECnPSYdjZuP%2BfEiU7ZFeUbu3RfI7%2FbJeAMTAIZIH4t%2BE9ye6X4HOKE4s5P05yVKN33DDtARHJFrZG5AmMGjCaWLMVr2TDZNurDos5%2FsAZlhcjvq6d%2BOSg70djC3zXQruSqIUVWS6x4KVNzd8s5bNMhtE62KyUV%2BwI82C%2B%2FaX5AMsJnCRDk%2FJBqIkaj%2FOP4KP9R%2Brd6Mu8NheKkIXv5jCVuGeTUUp9v0LZtu6GkyvH%2BOas1Mysoh9Mdao%2B%2B2XaBAPlh6SfFly92OoLNjg8RsIU%2B%2FstPXyu5eZHRnPo0gbFGTfBQubP%2FqUL7iEjypB8rpe%2BSp4sHjg9u0EoWAKgmU7cIyvL%2BTy9gHPkP8B3z6tkZqb1c4VoD5HyfOnMc%2BKkmsKRCCNVPQKfkY1a6mIOydMQrYYqnxRTiKe7Fj1%2FlMji5g9wYgtcpeSRffWPfQVCMLiDzckGOqUBl5HOAYgCIgwytJTgkgJrXMfuvXQbwzRG9uEJ%2BXctS5YiV4sGJcArHcLS9ykvi1%2B2uycP5JNSehtJgQshEuLElKTxQLbq5y%2BFM3VOXi94UXIIKR%2By%2Bi2QTux1IPME4yO7O%2BeshnC9G1BmymxSkAChD5LCOK1mTNk9veOoERR8JavcZYKTXRQOSc%2FMuTQHwDK7rCeilb9MxK13EBJbjJAwL9OHsbx4&X-Amz-Signature=4f3dfbc8fd548464dba1889a3d79b4db0e86a4c21873c5cb6c0117085d3f010f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

