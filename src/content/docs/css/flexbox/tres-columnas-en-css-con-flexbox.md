---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QM6O7ER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWMtWCDHzRsihTQ78RzHXqVfmQ3%2BpEG%2FUiOnLCEIhb6AiEAqJrtXSDxSnZWPqN6TJLDhf4Q6D%2FNPM4dissiP9I7tjQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG46RmNhG%2FFMNbQRuSrcA6RIa2knRXtPxv8JKzSJQbkoaPsc0zT5t6w2xioOoe%2BcAWGOOnCbEVn%2Bc%2BK7o7Iat%2Bxy%2FEdymMu09QFAA25gBAqls4G%2BtY2ncgeYfZEA4E2eSizQqfHaj4tRwdOkYdWtLoulcgX4mv1ohVh1V0JK82vIOwFoyro6T2q3EsvgGcKsAetqzL3JlTlY67w8eVvKEZOIFE9uZ%2B9L20Nc5CtgW1dcMDclozzZ5SLUHhjsnPSms7%2FDSp%2F4P%2B6HplqXPQAPmqgi6Tc3lnnZuHkkPi4DjAAzlUYykYC9mor%2Fd3EwTC5ePTS4tq4ZkuZBVYRWiJiD9Dx2KpA70l%2BKL1kktKfcl%2Brl6lmvbij8Qz3kfqzs6m21MZpz5mYcoJC%2BFnvWscrFaOTa%2BUnGLeh%2BrnN0AA1WGkgT1i%2FmFwjgTdgQj3WLMRu8%2FCKFhmWGg4W%2FeNdCnP92x9vstKAlP1T4uVAY3%2Bm9lKPMflIxhDnx9iJO5ibfTffcPRmfOk%2FTm75eZueQG5L0Fu8lvNp8P43iKhILUQmdnLMpOhpaWFfTtt2I%2FnWy5fdou74AvgDu7puP1lmdyrYMk9xIxzIJJYR%2Fs%2F3XybTzNv2CJ98IXYYPqHggbdvhqqqLWi7UynzTnaOAw2L7MM%2BE2MkGOqUBfPNKrk8hKRWl7zuCycYoEiOq7T%2F2okaEZe6o7%2FUEvsXY6o3oMGCNxlYB8ul2dTHh%2FIzs8SUKurYkOzfHlJ1R4avhp4VsJ9GpCwktmSfulGSq2PmYjPbISKvwah6XUuuJe7geW5DgnC9W40uSfa9XQRDeiPoTU0uvuPyceXwphVcg6yM1cYiv2HY%2BDZioucxiN9HMDZ%2FMGWvIIU7JTF%2Bo1bbHyDD5&X-Amz-Signature=b833792395b6dab115f7765e4dd899ff6fb967ddd61f363533a268a92e8e7659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QM6O7ER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWMtWCDHzRsihTQ78RzHXqVfmQ3%2BpEG%2FUiOnLCEIhb6AiEAqJrtXSDxSnZWPqN6TJLDhf4Q6D%2FNPM4dissiP9I7tjQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG46RmNhG%2FFMNbQRuSrcA6RIa2knRXtPxv8JKzSJQbkoaPsc0zT5t6w2xioOoe%2BcAWGOOnCbEVn%2Bc%2BK7o7Iat%2Bxy%2FEdymMu09QFAA25gBAqls4G%2BtY2ncgeYfZEA4E2eSizQqfHaj4tRwdOkYdWtLoulcgX4mv1ohVh1V0JK82vIOwFoyro6T2q3EsvgGcKsAetqzL3JlTlY67w8eVvKEZOIFE9uZ%2B9L20Nc5CtgW1dcMDclozzZ5SLUHhjsnPSms7%2FDSp%2F4P%2B6HplqXPQAPmqgi6Tc3lnnZuHkkPi4DjAAzlUYykYC9mor%2Fd3EwTC5ePTS4tq4ZkuZBVYRWiJiD9Dx2KpA70l%2BKL1kktKfcl%2Brl6lmvbij8Qz3kfqzs6m21MZpz5mYcoJC%2BFnvWscrFaOTa%2BUnGLeh%2BrnN0AA1WGkgT1i%2FmFwjgTdgQj3WLMRu8%2FCKFhmWGg4W%2FeNdCnP92x9vstKAlP1T4uVAY3%2Bm9lKPMflIxhDnx9iJO5ibfTffcPRmfOk%2FTm75eZueQG5L0Fu8lvNp8P43iKhILUQmdnLMpOhpaWFfTtt2I%2FnWy5fdou74AvgDu7puP1lmdyrYMk9xIxzIJJYR%2Fs%2F3XybTzNv2CJ98IXYYPqHggbdvhqqqLWi7UynzTnaOAw2L7MM%2BE2MkGOqUBfPNKrk8hKRWl7zuCycYoEiOq7T%2F2okaEZe6o7%2FUEvsXY6o3oMGCNxlYB8ul2dTHh%2FIzs8SUKurYkOzfHlJ1R4avhp4VsJ9GpCwktmSfulGSq2PmYjPbISKvwah6XUuuJe7geW5DgnC9W40uSfa9XQRDeiPoTU0uvuPyceXwphVcg6yM1cYiv2HY%2BDZioucxiN9HMDZ%2FMGWvIIU7JTF%2Bo1bbHyDD5&X-Amz-Signature=af37674adfe1ed61af80f9852975faa52d0251118c66f6650c570e85c492b925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

