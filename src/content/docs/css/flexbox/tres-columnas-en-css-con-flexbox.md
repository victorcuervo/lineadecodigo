---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DUKTJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJBfQyCO2ksV%2FOH15TIPJDmiE40JnmirZiNqXqiZguAIhAN70D7U%2F8O1fK5bUQCPTimc5LwzIN9h8lDtBeacak5T%2FKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUZfWBcrNNq31H45Aq3ANyLP5Y2RTerX6v79E7dmM3v8%2BNOLP6Ezvu%2B7CffJtRjdnk1nlwhkWi7%2BIvYCkoWFVeSGYi3Kg0n02H9IKj4sZGNLTlkm8YVlTpKVaLO78pJMfqj4ytO50xi49BvxKokUF9FvJ5QxHTAm3XUxvAKMzBnABEPOq4MxMT5lGjygQIe01tpngLoFC4Gc9NaSnxT%2Fqjx3kNA6Pox7PWX38l0ml%2BevEcHoMwC8WaJz1ciMNs77v%2BQRtUXEWYzIhtvxVdJHt6EKAqxGt%2FkCmcTEd8LNV%2Bmf7hITcWSzW%2BER2L2NEUuUIK%2BMlVJZdRyR2umY9xhOY5ilQ5gI82jyG4njdQfmEJySyYaACSPIyJFcyOiGSRDwCeurCidMwZj5G55KTh%2BVKt8m1yiOroDfuhzuKI7dOTKMvhvYZqUNNVzai8uU1CYbg65DCCFW7ALqr0EVWHoosMUuKuev8Zine57orGMARUx8wd8Q5UcNI8IdKwfvUVxoZ8PMvmKdNCazDBgnPrRDuw9tQXQDAjYpp0NiIBauD2ExMYiIFPLaRYA5yqSPmn%2B4ezE9VBCxlNqnJMMU%2FtSdBevFMvGuqJHIMSV1Q5%2B7cJLuUXtSSn8YctWS9Th2GxQQf3yoMNBcgahavdjjC4ot3JBjqkAQBP%2BaFkW2gM5h5BahhdUOCD2ThCnWLgrX4m%2FZmNPf82yEJHVTFj6QP6oUjCMCHvyfXb7DINla7GFyaaGzKr8ttPncuy96IWiIQgSlZuU%2FcDI7ic6kgDvUfmMGxfUKp%2B0TquZuxO%2Fyi1hh1zJH3xZA4XCw3D5GTNsIyjC6esaEJMmXZ8XW6%2Bj%2F0uzhBP3Dc0lKqP7Lf8Uweaph5LTLOMAN5eOsJ1&X-Amz-Signature=5cd9f4afaa550080e3ee95352477f9d91549c9478dd5fcca666d52decc509bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DUKTJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJBfQyCO2ksV%2FOH15TIPJDmiE40JnmirZiNqXqiZguAIhAN70D7U%2F8O1fK5bUQCPTimc5LwzIN9h8lDtBeacak5T%2FKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUZfWBcrNNq31H45Aq3ANyLP5Y2RTerX6v79E7dmM3v8%2BNOLP6Ezvu%2B7CffJtRjdnk1nlwhkWi7%2BIvYCkoWFVeSGYi3Kg0n02H9IKj4sZGNLTlkm8YVlTpKVaLO78pJMfqj4ytO50xi49BvxKokUF9FvJ5QxHTAm3XUxvAKMzBnABEPOq4MxMT5lGjygQIe01tpngLoFC4Gc9NaSnxT%2Fqjx3kNA6Pox7PWX38l0ml%2BevEcHoMwC8WaJz1ciMNs77v%2BQRtUXEWYzIhtvxVdJHt6EKAqxGt%2FkCmcTEd8LNV%2Bmf7hITcWSzW%2BER2L2NEUuUIK%2BMlVJZdRyR2umY9xhOY5ilQ5gI82jyG4njdQfmEJySyYaACSPIyJFcyOiGSRDwCeurCidMwZj5G55KTh%2BVKt8m1yiOroDfuhzuKI7dOTKMvhvYZqUNNVzai8uU1CYbg65DCCFW7ALqr0EVWHoosMUuKuev8Zine57orGMARUx8wd8Q5UcNI8IdKwfvUVxoZ8PMvmKdNCazDBgnPrRDuw9tQXQDAjYpp0NiIBauD2ExMYiIFPLaRYA5yqSPmn%2B4ezE9VBCxlNqnJMMU%2FtSdBevFMvGuqJHIMSV1Q5%2B7cJLuUXtSSn8YctWS9Th2GxQQf3yoMNBcgahavdjjC4ot3JBjqkAQBP%2BaFkW2gM5h5BahhdUOCD2ThCnWLgrX4m%2FZmNPf82yEJHVTFj6QP6oUjCMCHvyfXb7DINla7GFyaaGzKr8ttPncuy96IWiIQgSlZuU%2FcDI7ic6kgDvUfmMGxfUKp%2B0TquZuxO%2Fyi1hh1zJH3xZA4XCw3D5GTNsIyjC6esaEJMmXZ8XW6%2Bj%2F0uzhBP3Dc0lKqP7Lf8Uweaph5LTLOMAN5eOsJ1&X-Amz-Signature=f59cf6846bba94184e964db4e35fd707c2b713867a1d39e0a5dbc768384fcdb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

