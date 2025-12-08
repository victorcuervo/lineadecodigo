---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIILPZIL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo9d6TO96aXJxhFDnilXB%2Bjw%2B50%2BB0PNkiESLHnFPl1AiEAsZS1liYjkzzGCJnTNQXb%2FuJXOnH5OdaBf0P%2FxaFf%2F6cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIoWsMU8uexkn7UHyrcA3lvcvARxzGYze7QDk0ryCFVuUPAm80bJa25GQwWTy%2BcWkSwIoI0efuKH7%2BY7A0LYr12Ggc3Id%2BEn%2FrQlG3bIIYA%2BGN231dcP%2FGg5LFieAsEF4yCHQzErTIv79DptJClAi%2BwbU%2F6qz7emDuiMX7J9co035J8vGeVy301UzXDu03aMaLeYNvgYXwQwtGo4tvsrLhvRxwHRd0xBZ%2B9a70Ir7cTE8JnW7zxRXC2hjwMW3vqP0WVV93%2FYXHFkySLdNxXUtwDxz3CT6nyq79aqPGWTTNGj5hZnldTHPeYegbtHxkvPn%2FrWrPzO%2Bnl3t5C%2BvBxKKmGv4niFEmHwR1%2B1m%2F3%2FaLxg3%2FSDKpL%2FLOp2k%2FaIvoAr4tX3uyVonJ66xQGGQiHWqx1s30bSLoh2zXxHFt%2FdLav7YXtE5iPqrHn44J5Yehdk1JtE%2FxTbZrGen0CiodsRvKd%2F2pS%2F53VVZ5ZeApxgXeBJdEWalmi0%2BAGkw2j6KRazFmQUHXVu06R8v6t1IVJvITEXlFoCOYaRANkXBFD72zXVtgGM5OGGTCz9J8m45udo%2BJRYhzh25JKlAbUTHmSlWK9iYnDBHCbfA0h7496VW%2BRK5XU5RH3WDjOG1fk%2FAq5FgW3c8mCOu85pIjEMIaH3MkGOqUB8%2BZt%2FwW0z74bWAc8b2JuLgnp8b2CzkDQbd43pbI2eDALyHfIs1aO5dPv4GqMl8IJv%2FwJ99Lx4MvPeL%2B1hgtiS6hq2ALpZOu29iyldAI8zuLr%2FoX0Yn30QNjyw2qpfBEhWxJux%2F3Hbch38Zbeif0fHkv%2FpYa6bPworpj6NFnbzQFHYqYvuCL3S4TbF997kFE0Oqxa1XlZEhDApY9hz4%2FWdD1VdmfF&X-Amz-Signature=c1bf02ce0a5311ed2dc90b1d5b34b05d825870c09b31c02b4a337a944ba0790e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIILPZIL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo9d6TO96aXJxhFDnilXB%2Bjw%2B50%2BB0PNkiESLHnFPl1AiEAsZS1liYjkzzGCJnTNQXb%2FuJXOnH5OdaBf0P%2FxaFf%2F6cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIoWsMU8uexkn7UHyrcA3lvcvARxzGYze7QDk0ryCFVuUPAm80bJa25GQwWTy%2BcWkSwIoI0efuKH7%2BY7A0LYr12Ggc3Id%2BEn%2FrQlG3bIIYA%2BGN231dcP%2FGg5LFieAsEF4yCHQzErTIv79DptJClAi%2BwbU%2F6qz7emDuiMX7J9co035J8vGeVy301UzXDu03aMaLeYNvgYXwQwtGo4tvsrLhvRxwHRd0xBZ%2B9a70Ir7cTE8JnW7zxRXC2hjwMW3vqP0WVV93%2FYXHFkySLdNxXUtwDxz3CT6nyq79aqPGWTTNGj5hZnldTHPeYegbtHxkvPn%2FrWrPzO%2Bnl3t5C%2BvBxKKmGv4niFEmHwR1%2B1m%2F3%2FaLxg3%2FSDKpL%2FLOp2k%2FaIvoAr4tX3uyVonJ66xQGGQiHWqx1s30bSLoh2zXxHFt%2FdLav7YXtE5iPqrHn44J5Yehdk1JtE%2FxTbZrGen0CiodsRvKd%2F2pS%2F53VVZ5ZeApxgXeBJdEWalmi0%2BAGkw2j6KRazFmQUHXVu06R8v6t1IVJvITEXlFoCOYaRANkXBFD72zXVtgGM5OGGTCz9J8m45udo%2BJRYhzh25JKlAbUTHmSlWK9iYnDBHCbfA0h7496VW%2BRK5XU5RH3WDjOG1fk%2FAq5FgW3c8mCOu85pIjEMIaH3MkGOqUB8%2BZt%2FwW0z74bWAc8b2JuLgnp8b2CzkDQbd43pbI2eDALyHfIs1aO5dPv4GqMl8IJv%2FwJ99Lx4MvPeL%2B1hgtiS6hq2ALpZOu29iyldAI8zuLr%2FoX0Yn30QNjyw2qpfBEhWxJux%2F3Hbch38Zbeif0fHkv%2FpYa6bPworpj6NFnbzQFHYqYvuCL3S4TbF997kFE0Oqxa1XlZEhDApY9hz4%2FWdD1VdmfF&X-Amz-Signature=a7d2a6d1c0445a817f37f6b0065d93bdeaf01d14f994ee787bdc79b68e22f837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

