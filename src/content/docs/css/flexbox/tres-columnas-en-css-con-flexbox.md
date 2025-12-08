---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDQ7QAS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtvHMzEEajgYjnE9jhr8Rrj332Fb%2Bn8A0PRxWBbTXXgIgBmxUdFBatwaMjWzQYJRj7owMJ2ndCzvWUapIXtAx02kqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpy6xyDtWIbHSlDfyrcAysfGvO9l4e7TnPHNhROH2%2B5xhvqgiBQ46a2cr%2FaEPpWeU%2FO6yU02fEX%2FnYEY3SiC5JtNhqeQf6n9eQOTSqx%2F7Yr%2BWRyjBAByp2WfJmF5n793t%2FkQZj9SFjjWJzx4Xp4boAF6i7hibItDyat7DYmeF7GmDQUEpyvYeWnQmfbHDWAlm%2FWPtaKNblJSoFzzMtFpoUpyBR3I%2BdCascWlhdu64iJ0Bvi5rB2NgEc5O0SslDRDFCWQS6ZvXbd3HXVOI2O%2FZg67%2BbOiK6U79PKffnZwI1p0iVeLwvsdLYFsxcD0W928FkthHuiHQ9pJrijD4q4udYfO1gfxSPVdHRB0HFdCBVJL%2BFdVtv1TAAkwUgrhhkY2KLY5UpHafpxlpF1E3S4O25mKOZ6ndcb96VUuLjEV6q99FaVGSUyRooE4rT1Wqlm0%2FUl7TXkm9paj3yXWwOaFZvPhK0QSeZb8ut4e6eyIKB5mgT%2FiFYhUjKN%2F%2Bhd0MHg4MAPoCKeQxHGFOiPBu%2BvX9sOb8fyv2cVrFWC63IPK4EuMqQfvIgwyXNzCNmNhxOwSTaqKuGivygxKhC9jaLTuTxFKlM8VLDZ3yVjR%2BXCca%2BczeWqzoJ1jIZcahEkifOZRBK7lEQb16j1iT2QMLfu2ckGOqUBDABXQ68%2Bu41PP9jeYyIKI9OokE4VcNMWgmR3i8qfwmVFKke8LrZkKov92UcIm4M9%2BVzAR6o1OXtxSylFGi7BlDh330fmIxA43TrhQ%2FpUV3JlCUJOb3seSgD6SleK4r1qIK9ndnW6nDsV7sxOyvMYkqcImz10yb4QYSo5dBYzWfJFePolipq37rqEaXRdOqnbHPJw2uXAuAeMeSPOxnz4hz%2B8iLZC&X-Amz-Signature=c7adb521ccbbaf2ee2884ba879fc430a34f9ea92febfe3ca788598d5ed6b09f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDQ7QAS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtvHMzEEajgYjnE9jhr8Rrj332Fb%2Bn8A0PRxWBbTXXgIgBmxUdFBatwaMjWzQYJRj7owMJ2ndCzvWUapIXtAx02kqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpy6xyDtWIbHSlDfyrcAysfGvO9l4e7TnPHNhROH2%2B5xhvqgiBQ46a2cr%2FaEPpWeU%2FO6yU02fEX%2FnYEY3SiC5JtNhqeQf6n9eQOTSqx%2F7Yr%2BWRyjBAByp2WfJmF5n793t%2FkQZj9SFjjWJzx4Xp4boAF6i7hibItDyat7DYmeF7GmDQUEpyvYeWnQmfbHDWAlm%2FWPtaKNblJSoFzzMtFpoUpyBR3I%2BdCascWlhdu64iJ0Bvi5rB2NgEc5O0SslDRDFCWQS6ZvXbd3HXVOI2O%2FZg67%2BbOiK6U79PKffnZwI1p0iVeLwvsdLYFsxcD0W928FkthHuiHQ9pJrijD4q4udYfO1gfxSPVdHRB0HFdCBVJL%2BFdVtv1TAAkwUgrhhkY2KLY5UpHafpxlpF1E3S4O25mKOZ6ndcb96VUuLjEV6q99FaVGSUyRooE4rT1Wqlm0%2FUl7TXkm9paj3yXWwOaFZvPhK0QSeZb8ut4e6eyIKB5mgT%2FiFYhUjKN%2F%2Bhd0MHg4MAPoCKeQxHGFOiPBu%2BvX9sOb8fyv2cVrFWC63IPK4EuMqQfvIgwyXNzCNmNhxOwSTaqKuGivygxKhC9jaLTuTxFKlM8VLDZ3yVjR%2BXCca%2BczeWqzoJ1jIZcahEkifOZRBK7lEQb16j1iT2QMLfu2ckGOqUBDABXQ68%2Bu41PP9jeYyIKI9OokE4VcNMWgmR3i8qfwmVFKke8LrZkKov92UcIm4M9%2BVzAR6o1OXtxSylFGi7BlDh330fmIxA43TrhQ%2FpUV3JlCUJOb3seSgD6SleK4r1qIK9ndnW6nDsV7sxOyvMYkqcImz10yb4QYSo5dBYzWfJFePolipq37rqEaXRdOqnbHPJw2uXAuAeMeSPOxnz4hz%2B8iLZC&X-Amz-Signature=b306b882c2f7f06ad01eb043b434b14f49bc6d3b4502339873c22ef62d369aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

