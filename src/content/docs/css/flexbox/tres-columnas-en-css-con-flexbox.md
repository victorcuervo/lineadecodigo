---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PLPL5O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyCnJSh%2Fd%2F9zCg6e2bPW7sTupoy8q%2FoHMif0ZwG8wDPAiACdvJofS9zo1BcMEW1JxyjiEemYq%2FaoSI5drK97nnUlir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM3Tyb1LfkJwSZHSbdKtwDjgR1qqywfh3ftUH52FPpO9HtR00%2BadVIY%2Fh9OWtcYf00nTV3SLcvBq4f6AK%2Fl%2FkB3Nm0sZDextBB8Pz3FxB28MvbPeaChkm4DdRASCeQBLopGMB1mQhZxDc2ioiut%2F4jhMGQuhbE1UUYrWie%2Fh5%2FoJFjjY1g6wpGsAZ8LjSPEscwu8y1LAyvvcahC%2FptY4%2FzGqyBCHPnzDhz9nv%2B9ei5y3558VJ7UoH5j0xQuZan3ZcLIF%2BHRDrsYLFnSQbGDY6g%2BTzDf6si5NCW9rzijM5XtlP8TZwQaHztq6Jn%2BWuWuOAp%2FfcI8fjN3dY0%2BnUaGd5tRiTaON6qgZhavF67Oe3IBRRpdc3iofrCIy%2FUxeEsEwbhrFXoRpNdck4VGfBELOCmkIPSyULwrswjUVkVZZhpJ8Nc2CUmdqdLF7XsxcyERABygMIANEi2Reuk0n7RKAbqVwtIhTu%2BbEHHgppGARei6AMGrsskoIKZgB%2FSOqIwDuMQ9soiciBQKjUx2t5TkD3HVdDYos5hM7k%2BppBgWjp5xKOHbJ0CQBKtPGyycl39IeR%2FV2pPnTVHQNY%2BN8e8EggAz6Gs3U1ruPHf8Pe8PuKXW%2BoVlrpZE1%2Bhg6kq9aglDTymRzXpPwGj7XbFE5IwiNHKyQY6pgGIgqvTWP9TRETD%2BpTkXeUkdmGUhOzQfju8Py2tpPqVyxdeShAI52kjwgF3bzxH8Ukb%2Fss%2Fda0KVp%2FuBxHtfi2u6SipMKujqWTQaEgMptlemiEO6PkwkuFiPVq6TOjIW0kOMl070dKdUrH5D1tmiXhemRlAI%2BzcpuZgl4SSNP2vH8sU601OwXmzKATCJCaNvtFAfEqY9arNT2YaNQ3xi0mDKrwiuwac&X-Amz-Signature=76030e55890af26ac6a9b1a68915ccd11dbe94a054db43647ba52cad28db8e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PLPL5O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyCnJSh%2Fd%2F9zCg6e2bPW7sTupoy8q%2FoHMif0ZwG8wDPAiACdvJofS9zo1BcMEW1JxyjiEemYq%2FaoSI5drK97nnUlir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM3Tyb1LfkJwSZHSbdKtwDjgR1qqywfh3ftUH52FPpO9HtR00%2BadVIY%2Fh9OWtcYf00nTV3SLcvBq4f6AK%2Fl%2FkB3Nm0sZDextBB8Pz3FxB28MvbPeaChkm4DdRASCeQBLopGMB1mQhZxDc2ioiut%2F4jhMGQuhbE1UUYrWie%2Fh5%2FoJFjjY1g6wpGsAZ8LjSPEscwu8y1LAyvvcahC%2FptY4%2FzGqyBCHPnzDhz9nv%2B9ei5y3558VJ7UoH5j0xQuZan3ZcLIF%2BHRDrsYLFnSQbGDY6g%2BTzDf6si5NCW9rzijM5XtlP8TZwQaHztq6Jn%2BWuWuOAp%2FfcI8fjN3dY0%2BnUaGd5tRiTaON6qgZhavF67Oe3IBRRpdc3iofrCIy%2FUxeEsEwbhrFXoRpNdck4VGfBELOCmkIPSyULwrswjUVkVZZhpJ8Nc2CUmdqdLF7XsxcyERABygMIANEi2Reuk0n7RKAbqVwtIhTu%2BbEHHgppGARei6AMGrsskoIKZgB%2FSOqIwDuMQ9soiciBQKjUx2t5TkD3HVdDYos5hM7k%2BppBgWjp5xKOHbJ0CQBKtPGyycl39IeR%2FV2pPnTVHQNY%2BN8e8EggAz6Gs3U1ruPHf8Pe8PuKXW%2BoVlrpZE1%2Bhg6kq9aglDTymRzXpPwGj7XbFE5IwiNHKyQY6pgGIgqvTWP9TRETD%2BpTkXeUkdmGUhOzQfju8Py2tpPqVyxdeShAI52kjwgF3bzxH8Ukb%2Fss%2Fda0KVp%2FuBxHtfi2u6SipMKujqWTQaEgMptlemiEO6PkwkuFiPVq6TOjIW0kOMl070dKdUrH5D1tmiXhemRlAI%2BzcpuZgl4SSNP2vH8sU601OwXmzKATCJCaNvtFAfEqY9arNT2YaNQ3xi0mDKrwiuwac&X-Amz-Signature=0b650c4adda1e2ce25c07ebd662c3c59dbee6172be5703b5cfede79f3fe6a69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

