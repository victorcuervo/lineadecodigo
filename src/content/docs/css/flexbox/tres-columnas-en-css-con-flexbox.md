---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKRFCQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhSBj%2FjhaUWWCll5bRps9908Bu%2BfZb4SctTRMW2wtuZAiEAsKcpkuBeCOaiGUw6zmgWgLkM5GfDwA16pGj7fSFIjxAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa9EKJIlcgtdXXEmyrcA8mv2CfiuB6QS3gct4UNwXEWE%2FHIQMhM8Bq6z2PNH21JV922NJYcQCuvSjjFp%2Bg%2Fg%2Fh9zC6CHEnPxT%2FWMxYRD1%2BwKqmtfHOo9SqgaUsmMyYnFE5X68tWB%2FnMP%2BJqwc8YPwQc62Unyr9Shu13SL99CnLNyfTFdrhkgSzOjgi32WcN0pPXPGdckyl8ymy8ll7uFwRr6fcCATJbinF0RkWyKTZrONlPnRs4W%2FPJHtJVDdxYBuKBupQE1yGV0FVf%2BiBgBxIZ4SEPM4w3mbJ65wIn%2BeutvZejFk4peS5WTEizvgUkXEXMdPKiMi5HSE5oScD1XxmCr7R7JG1tHk5eLdTpJ5kbPgI2EpjoFkkqbNuXnnCICupHp%2FByXeA1mV%2BKkl9sKddDHRCoqzH5l0tYkiHxQrtkmogjStkUQCgh%2FB42C3QDSYwGW5mvI0qGLgXXZ0GJ3mRoE93Gha7uJhMniBrK2vJbI4P3QLOHpCCh%2FeFusjOKDrNjNHb%2FjKn8WF4a%2FoxvbEFR4N7tUGzQetacKLffXkhdUuTYTOFZKFxi8V73XuJTxAAquOwaxmniAGDH5SwFXEwsjPDkaQxM3LbKWcmF11CzqrnCONa9i%2FK4hDocIvD3nVmNA%2B9eBllnIf5wMNKZ1MkGOqUBLLMt%2FHg9xOGfMvPoEi9FxPxLh1tqBGNWPZeh%2F2zoNSJUJlJziesweOHb2s7WKDMt9buPiGzDN0K7gmBcJpJoQvVGgtZqxUiwpj6IokFPqeTfqY0rOs5Gtexjw2PfCOkP%2BevJWUBUOpXPSV8M8An1oyIWfl0XLKzqm%2FxqZzU0JhOHlODVKvOpRgXIuQzl4DomO12Mqqfz6IA%2F3Zt1OY4lyWioibGU&X-Amz-Signature=5175824376a5027f0180377da3cc1f8826a4aa322e2c6ae39c4f02d2360e3045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKRFCQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhSBj%2FjhaUWWCll5bRps9908Bu%2BfZb4SctTRMW2wtuZAiEAsKcpkuBeCOaiGUw6zmgWgLkM5GfDwA16pGj7fSFIjxAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa9EKJIlcgtdXXEmyrcA8mv2CfiuB6QS3gct4UNwXEWE%2FHIQMhM8Bq6z2PNH21JV922NJYcQCuvSjjFp%2Bg%2Fg%2Fh9zC6CHEnPxT%2FWMxYRD1%2BwKqmtfHOo9SqgaUsmMyYnFE5X68tWB%2FnMP%2BJqwc8YPwQc62Unyr9Shu13SL99CnLNyfTFdrhkgSzOjgi32WcN0pPXPGdckyl8ymy8ll7uFwRr6fcCATJbinF0RkWyKTZrONlPnRs4W%2FPJHtJVDdxYBuKBupQE1yGV0FVf%2BiBgBxIZ4SEPM4w3mbJ65wIn%2BeutvZejFk4peS5WTEizvgUkXEXMdPKiMi5HSE5oScD1XxmCr7R7JG1tHk5eLdTpJ5kbPgI2EpjoFkkqbNuXnnCICupHp%2FByXeA1mV%2BKkl9sKddDHRCoqzH5l0tYkiHxQrtkmogjStkUQCgh%2FB42C3QDSYwGW5mvI0qGLgXXZ0GJ3mRoE93Gha7uJhMniBrK2vJbI4P3QLOHpCCh%2FeFusjOKDrNjNHb%2FjKn8WF4a%2FoxvbEFR4N7tUGzQetacKLffXkhdUuTYTOFZKFxi8V73XuJTxAAquOwaxmniAGDH5SwFXEwsjPDkaQxM3LbKWcmF11CzqrnCONa9i%2FK4hDocIvD3nVmNA%2B9eBllnIf5wMNKZ1MkGOqUBLLMt%2FHg9xOGfMvPoEi9FxPxLh1tqBGNWPZeh%2F2zoNSJUJlJziesweOHb2s7WKDMt9buPiGzDN0K7gmBcJpJoQvVGgtZqxUiwpj6IokFPqeTfqY0rOs5Gtexjw2PfCOkP%2BevJWUBUOpXPSV8M8An1oyIWfl0XLKzqm%2FxqZzU0JhOHlODVKvOpRgXIuQzl4DomO12Mqqfz6IA%2F3Zt1OY4lyWioibGU&X-Amz-Signature=ca751c9cab307769b590eab313194bb223ed581b044bfe8ba20bd13e69b9a0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

