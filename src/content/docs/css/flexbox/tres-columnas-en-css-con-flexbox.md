---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY6NJXK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2XDETpyyu4aBbDsdB%2BkohPc9XFYckASFm0vxqlq%2FqwIhAP%2BylwleskZ1mLNQiS7e1f34uncV2HQ%2FzI9Ql9RTE1uiKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BxJ7Ti4oTTnbJLOQq3AO028GwVib0XVOoYdhg0VuYEOSl%2BDT8Im8G5MugsitZRa01lDdco07JV1w7f16DCpGe6tcuo1gtcnbxUh3cVAZU5%2FMLrluskYLhainTWO%2F5rtXG8OfsHi2rdhq8%2F93tKPXi7EnCWLmngzddVJCRlrKjxLK25wTEBhkQLPEuvvkNNNxzY9kWXSdbCQEhk%2B1%2BSFuskLNfE3yC4XKOHyRyR0hslGGLZNMbRhkO5vE%2B%2Fb7OxnQZdq0i0e03XpNf5HPLeQCPWsAbdAhAUqYPO5OQXbRG4keoBGBWNzyGKljGXguOKSAH7CKy3otq1y%2B3G5MlS1Uq69tf9b5QtgPl3QnD%2BReJsyH2r%2B5wED1oJcnNzrh7c0GCfXM%2Fkr%2F7HpNCVKz8OgqdFCe0mF2nKCSlyj2vn%2F0byNHWTTXmWEdKNH1C9ntPKw5wNy%2F8KzVMxOcr4WC%2FMTRVmusdSj78WXWAeVTmqZqNLxE7OVaw6bVnwGQkI4oQagTaMI1GtWU4qTSKJ0UKhQv04jkcIkfj03DtJfpBxL60QaMqmNPjXfS6szSa0mftEqptacbrxNHGsOyyaYfJM4IkfVHCqexdlzAKwOD2C9vAWMO5ezOjArdxM0hAyz%2BB%2BCcq4tsZ5%2FYaLqFr2jCzo9TJBjqkAYaSgNwA%2BDrmQo6sBodkhwyo4w%2Bx4kqUXSw%2B5RtOavG4PZO%2BWT8MwtQHf%2FSNpFViItZRV2wPzzkevtVJ0uszE9kwzgcovjxtrKt653o%2FBStrLQ3QRQDA8p5zaxttNyzT3Q9OZX7Lza%2BvARGR5WGbBsAvFYRWMKEUsme17Bh7tGGV1HGh1LsQUM2y5z6tHB5VjobHpNtlq262WlmHd268v04FP0RG&X-Amz-Signature=e663b24f1b7860943735eed9d4821ccda9906a59a7d3bb07f45498e1bb5ca5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY6NJXK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2XDETpyyu4aBbDsdB%2BkohPc9XFYckASFm0vxqlq%2FqwIhAP%2BylwleskZ1mLNQiS7e1f34uncV2HQ%2FzI9Ql9RTE1uiKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BxJ7Ti4oTTnbJLOQq3AO028GwVib0XVOoYdhg0VuYEOSl%2BDT8Im8G5MugsitZRa01lDdco07JV1w7f16DCpGe6tcuo1gtcnbxUh3cVAZU5%2FMLrluskYLhainTWO%2F5rtXG8OfsHi2rdhq8%2F93tKPXi7EnCWLmngzddVJCRlrKjxLK25wTEBhkQLPEuvvkNNNxzY9kWXSdbCQEhk%2B1%2BSFuskLNfE3yC4XKOHyRyR0hslGGLZNMbRhkO5vE%2B%2Fb7OxnQZdq0i0e03XpNf5HPLeQCPWsAbdAhAUqYPO5OQXbRG4keoBGBWNzyGKljGXguOKSAH7CKy3otq1y%2B3G5MlS1Uq69tf9b5QtgPl3QnD%2BReJsyH2r%2B5wED1oJcnNzrh7c0GCfXM%2Fkr%2F7HpNCVKz8OgqdFCe0mF2nKCSlyj2vn%2F0byNHWTTXmWEdKNH1C9ntPKw5wNy%2F8KzVMxOcr4WC%2FMTRVmusdSj78WXWAeVTmqZqNLxE7OVaw6bVnwGQkI4oQagTaMI1GtWU4qTSKJ0UKhQv04jkcIkfj03DtJfpBxL60QaMqmNPjXfS6szSa0mftEqptacbrxNHGsOyyaYfJM4IkfVHCqexdlzAKwOD2C9vAWMO5ezOjArdxM0hAyz%2BB%2BCcq4tsZ5%2FYaLqFr2jCzo9TJBjqkAYaSgNwA%2BDrmQo6sBodkhwyo4w%2Bx4kqUXSw%2B5RtOavG4PZO%2BWT8MwtQHf%2FSNpFViItZRV2wPzzkevtVJ0uszE9kwzgcovjxtrKt653o%2FBStrLQ3QRQDA8p5zaxttNyzT3Q9OZX7Lza%2BvARGR5WGbBsAvFYRWMKEUsme17Bh7tGGV1HGh1LsQUM2y5z6tHB5VjobHpNtlq262WlmHd268v04FP0RG&X-Amz-Signature=cf5299d7807e8b65781f94c28adc2e12f9b0095067e39af6f014196719f03d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

