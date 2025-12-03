---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXMK6EA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDLo%2F6Ck91oc9nq0fa%2FbSXMFn133Tgm%2Fym9PhOMzMqlOAiAg6S76rXoRqyToiWq2cUNIi4t0OxWbprSFTc0aGWdfsir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMuwBATbz6C0O98OhPKtwDM%2BgxrhWtlCzzL6Dp82QH8VZ9bk4VHlaDQoigiWqNaUA6T4nXp6DvD4RS8GVU7e31b07IFjQu%2FL95Dz6DVySkp%2BU8FEddnxAlKFOsy4Hx8ksMvhYC98fkELfvQp%2FmwIIJIo9DSIbVHAPEvedV0jKNBwXhZwJ2olUr0Wv23M84ZXWSGeEGNEl7DOVrNFNnQpE9t27ClQlDNTlJufyNwJ%2BUt9%2F3NtbkqswWm9snUJIKfxSbS7PKWrmcEjuGxxN82iyqiCnDcRSxN2tGUULx%2FsemXu4hkKxFo8dYHdscqUkbRu%2Fn%2FdU9cWQUYS0WAcrn43jsz8rkx4wGQb8q3%2F0HcabiWsN21A%2F8sOHzCh5b9%2BpozZG3m3LT%2FnZhMOlgFsR9Cu9ANPq7susNTk596zVl9aAHhrRQ0%2F7rvuuQ3IPP8ba85UVaiBe3HGCkCtQwwG39biOFvLlqTVGUeB4Rhf7HGxx%2FOOY4IYTMxat6ObqPW1%2FDrH02K%2Bj8F2dZx%2FERgiatvSoaCwTlqkdWF1PtLO3GZLUQB%2BlkSux9pxDx9%2F9L1IXxo00d8qQmH12YWKtVT9shoAxShCUIOmO6%2BcZWLezl15fgz0k298VEwuNrx4fgrBtaAU9zjPMxrno8zGBC0WgwzPfCyQY6pgEXKu%2FsHrbjb964KHl2ImL3Y7%2FIYwxohUYyilE7BCmdV1Avhy8ihzUtH0FBIo%2F0KQCmckwYXOwres%2FmXUBL%2B2Orvnt7fUwSomRWSC0vyUVt7xGUBMyCPA0SWSwdjYiKHQHv5Iurf6XSrFAQsqGIcQaAnd7JgCQG2orlcO0qRpwBglOZ3GtIZGSJNh6FcYb3LgtUa4cWJ968iI14PqHPBu%2FQNAE4Dr74&X-Amz-Signature=908d5abebd44105d3acfca1ff5df398518252c3a1b1023cfcd58764b73182f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXMK6EA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDLo%2F6Ck91oc9nq0fa%2FbSXMFn133Tgm%2Fym9PhOMzMqlOAiAg6S76rXoRqyToiWq2cUNIi4t0OxWbprSFTc0aGWdfsir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMuwBATbz6C0O98OhPKtwDM%2BgxrhWtlCzzL6Dp82QH8VZ9bk4VHlaDQoigiWqNaUA6T4nXp6DvD4RS8GVU7e31b07IFjQu%2FL95Dz6DVySkp%2BU8FEddnxAlKFOsy4Hx8ksMvhYC98fkELfvQp%2FmwIIJIo9DSIbVHAPEvedV0jKNBwXhZwJ2olUr0Wv23M84ZXWSGeEGNEl7DOVrNFNnQpE9t27ClQlDNTlJufyNwJ%2BUt9%2F3NtbkqswWm9snUJIKfxSbS7PKWrmcEjuGxxN82iyqiCnDcRSxN2tGUULx%2FsemXu4hkKxFo8dYHdscqUkbRu%2Fn%2FdU9cWQUYS0WAcrn43jsz8rkx4wGQb8q3%2F0HcabiWsN21A%2F8sOHzCh5b9%2BpozZG3m3LT%2FnZhMOlgFsR9Cu9ANPq7susNTk596zVl9aAHhrRQ0%2F7rvuuQ3IPP8ba85UVaiBe3HGCkCtQwwG39biOFvLlqTVGUeB4Rhf7HGxx%2FOOY4IYTMxat6ObqPW1%2FDrH02K%2Bj8F2dZx%2FERgiatvSoaCwTlqkdWF1PtLO3GZLUQB%2BlkSux9pxDx9%2F9L1IXxo00d8qQmH12YWKtVT9shoAxShCUIOmO6%2BcZWLezl15fgz0k298VEwuNrx4fgrBtaAU9zjPMxrno8zGBC0WgwzPfCyQY6pgEXKu%2FsHrbjb964KHl2ImL3Y7%2FIYwxohUYyilE7BCmdV1Avhy8ihzUtH0FBIo%2F0KQCmckwYXOwres%2FmXUBL%2B2Orvnt7fUwSomRWSC0vyUVt7xGUBMyCPA0SWSwdjYiKHQHv5Iurf6XSrFAQsqGIcQaAnd7JgCQG2orlcO0qRpwBglOZ3GtIZGSJNh6FcYb3LgtUa4cWJ968iI14PqHPBu%2FQNAE4Dr74&X-Amz-Signature=5f8352b9bee73605b5e0be5b27f1eefdb1fa2cf5f74fb4458225f09acbcd8728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

