---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYHIUPY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKIfdAJHKmZeVDacCq9k9ZuBpYhlodYk%2FEHM12O8sjAIhAO5W5JZ1GUrMiDL9FSmZVoWn4RZT27pmWwHm9ZzqcA8bKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3EH5CU0Gzo76rI0Yq3AMyqcnlCz7Y52XZBAPtbs4y2Opf7efvn7EaDEuwp9cx8W8ThHhYAdGRb1ukzSztaINmzR4GcAv%2FUpCjCdMri5oCi2PkIQ8WmnHzd2gcG01f5k5%2FKoVnWvxBGux%2BzL47k0tfLL70Fh6kDJPDCs%2BGhbu0CN%2BvdXafC7fgw7SKoYAG1tKaIufa6Ex1wJVams6Cyb1%2F%2FyWiAbzPrfgpBwvRceuGFcT06CnMsKTt0aPJVeZlQt4JyOsOi7ytIHh%2FP9ebZSZcqMAP%2FcBY%2FE0goPYobKsbCC3cV6kJxoTdtUpdIgWRAllYxG%2BxRLOFI4b0P3%2B%2Br%2BeKYUQQQQSM7XVSDcJin1s5h841dcMkWB7JsiPJzN6Z2TUi6B4qfGe6KcRdyQts%2BZJ4%2B8GmOIgX6yJ%2BgN1z8Ueq1XtQXfNfV3N%2BH%2B1V33dHgTfIJBjuoKCxCQoVXAs39MZ527DmO9sAccG9s7vcyiJZG%2F103akQYbOSxKYwgsn%2Bja9kBWWI5Bzi4dn5N6eVDWup8%2FbLVK67XYsrppgIPD2V5X%2FdPMuVweSbJHyaCQD9TkvMGKd03HNFB3NrV9fWN3I%2FgsTL%2F9B9dHGcRX9TCiYf4wn2TGJG5M8XahCXCnSvn%2F7qFKTlDoDmi93YtTCO%2FdLJBjqkAdMF1gyalzBW164%2BwAJntjmQq%2BHSLckM582PhzZqkX1BmysKup3IcqWGYqKN%2FM7qsiykUh4fuyeYKagTMN5sQruVG23WTqBdorw%2F3ZTOhEXLCByg%2BN5NcUwLZxiDu3rg7x4IQbthmnvZ63RHVQETqzlh%2FAg1ImbYtUBWo37lDE1RZQ9DAe4d2T5ImP87YHTlUnG0BW9dbFbDcmfGBSIzGE2%2FloJ0&X-Amz-Signature=eacf687f038cc4b457e6f796465e18ceda771e3a00c8ff2eb3e3a241765b8127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYHIUPY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKIfdAJHKmZeVDacCq9k9ZuBpYhlodYk%2FEHM12O8sjAIhAO5W5JZ1GUrMiDL9FSmZVoWn4RZT27pmWwHm9ZzqcA8bKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3EH5CU0Gzo76rI0Yq3AMyqcnlCz7Y52XZBAPtbs4y2Opf7efvn7EaDEuwp9cx8W8ThHhYAdGRb1ukzSztaINmzR4GcAv%2FUpCjCdMri5oCi2PkIQ8WmnHzd2gcG01f5k5%2FKoVnWvxBGux%2BzL47k0tfLL70Fh6kDJPDCs%2BGhbu0CN%2BvdXafC7fgw7SKoYAG1tKaIufa6Ex1wJVams6Cyb1%2F%2FyWiAbzPrfgpBwvRceuGFcT06CnMsKTt0aPJVeZlQt4JyOsOi7ytIHh%2FP9ebZSZcqMAP%2FcBY%2FE0goPYobKsbCC3cV6kJxoTdtUpdIgWRAllYxG%2BxRLOFI4b0P3%2B%2Br%2BeKYUQQQQSM7XVSDcJin1s5h841dcMkWB7JsiPJzN6Z2TUi6B4qfGe6KcRdyQts%2BZJ4%2B8GmOIgX6yJ%2BgN1z8Ueq1XtQXfNfV3N%2BH%2B1V33dHgTfIJBjuoKCxCQoVXAs39MZ527DmO9sAccG9s7vcyiJZG%2F103akQYbOSxKYwgsn%2Bja9kBWWI5Bzi4dn5N6eVDWup8%2FbLVK67XYsrppgIPD2V5X%2FdPMuVweSbJHyaCQD9TkvMGKd03HNFB3NrV9fWN3I%2FgsTL%2F9B9dHGcRX9TCiYf4wn2TGJG5M8XahCXCnSvn%2F7qFKTlDoDmi93YtTCO%2FdLJBjqkAdMF1gyalzBW164%2BwAJntjmQq%2BHSLckM582PhzZqkX1BmysKup3IcqWGYqKN%2FM7qsiykUh4fuyeYKagTMN5sQruVG23WTqBdorw%2F3ZTOhEXLCByg%2BN5NcUwLZxiDu3rg7x4IQbthmnvZ63RHVQETqzlh%2FAg1ImbYtUBWo37lDE1RZQ9DAe4d2T5ImP87YHTlUnG0BW9dbFbDcmfGBSIzGE2%2FloJ0&X-Amz-Signature=6da8dda52f859490a124691e216e1a0bdbab03a5302bc614fbea853d8e5d4329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

