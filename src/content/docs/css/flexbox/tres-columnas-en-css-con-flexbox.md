---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNY3JR5P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ21nFoUiYHAHoclnPK3p1ILDfQfahcrNsdDpNnMaeIAIhALpJHLQZi%2BHrD2mKRyBZBP2%2FHxTz69%2Bwhifn5naKo0jlKv8DCGAQABoMNjM3NDIzMTgzODA1Igx0z6h9p2qsOESznDwq3AMYviVVaiVZLP1ly5IFAk0NoGcH8yVKVx9kZsWcz%2FRGPHbbCZtpDkFntt76XPB1tMWBbEoFQAt2ekP%2Fq1Y9sVCWHdPwx51Do%2FKw2yJtZAP%2FW0iy2iLa518rYo2WZ%2F%2BUU%2FoOZDN5%2Bofq4uMexnnrGMOnFcKZmRys6mzK0R%2Fo4W4RGRBeqOZ99Bn37sz5q%2FkFBdwFV7JfKK4xbIJCBa4h6PYVjgoVczbzddacYl2o5NctFXZfnGv0%2B%2F8MwSD7zvAVLG1vFC%2BqNTxdQQEhoWxzdzwRDX%2B18SnDjy%2F5VXpYlat2wXYej7toVSLDzNWMzyH%2BpszfY6NHPJrT45Vn61I%2BafQLFYAdxmqAolGuUDISYw0Bu2zCcjOAKQS7B%2FWqJ%2Fktw8gJi1P7IJxtJbVff%2BOB2h9twbtC%2FoXEEqbDiKkOeZy%2FLTW6r9GOkzHu3CCM64RIXQK1o%2BA1FGWD0jUxh9b3MrLURQvQC8zzQZejzyTca9PR%2BudyuVPz9OyaLfCVO%2FMf3obCDd%2Fl4AvO7MMj%2BnSn7tl2VMUOZ57dnd7Q0CaD1QOMMPONH8BU3OEByZNspqzCglTUoVeQriM%2BCfF9Rh26X9riYAg7umDI7W%2FFHbXM92L5yt%2BeLJk3yb2TBOCCMjCn7cvJBjqkAZcRN04YdbNI5VME2Ra4vHXEAFRWFYMzjnq3sGHOzgJGurDvTz18xiQGredzJVlgXDrsUr%2BwrvzMMhOAAmfSSVzSZ59gadAlZhs%2F1fbiRq4l3AVQvCxlO11S2S%2FHbzhKUS5zzq2zKqmzDcgUQ6EdXJ2ChQERi0ycncYkxwRD5ykGflHuR7WPZnPzvEmQ7v8uu8OKjh5uDgGF1QvIIsh2LGqX%2BVFt&X-Amz-Signature=7964514961cb79cb90b3a07694ae6cd7718d8325300abff9ae5044f96d31f475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNY3JR5P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ21nFoUiYHAHoclnPK3p1ILDfQfahcrNsdDpNnMaeIAIhALpJHLQZi%2BHrD2mKRyBZBP2%2FHxTz69%2Bwhifn5naKo0jlKv8DCGAQABoMNjM3NDIzMTgzODA1Igx0z6h9p2qsOESznDwq3AMYviVVaiVZLP1ly5IFAk0NoGcH8yVKVx9kZsWcz%2FRGPHbbCZtpDkFntt76XPB1tMWBbEoFQAt2ekP%2Fq1Y9sVCWHdPwx51Do%2FKw2yJtZAP%2FW0iy2iLa518rYo2WZ%2F%2BUU%2FoOZDN5%2Bofq4uMexnnrGMOnFcKZmRys6mzK0R%2Fo4W4RGRBeqOZ99Bn37sz5q%2FkFBdwFV7JfKK4xbIJCBa4h6PYVjgoVczbzddacYl2o5NctFXZfnGv0%2B%2F8MwSD7zvAVLG1vFC%2BqNTxdQQEhoWxzdzwRDX%2B18SnDjy%2F5VXpYlat2wXYej7toVSLDzNWMzyH%2BpszfY6NHPJrT45Vn61I%2BafQLFYAdxmqAolGuUDISYw0Bu2zCcjOAKQS7B%2FWqJ%2Fktw8gJi1P7IJxtJbVff%2BOB2h9twbtC%2FoXEEqbDiKkOeZy%2FLTW6r9GOkzHu3CCM64RIXQK1o%2BA1FGWD0jUxh9b3MrLURQvQC8zzQZejzyTca9PR%2BudyuVPz9OyaLfCVO%2FMf3obCDd%2Fl4AvO7MMj%2BnSn7tl2VMUOZ57dnd7Q0CaD1QOMMPONH8BU3OEByZNspqzCglTUoVeQriM%2BCfF9Rh26X9riYAg7umDI7W%2FFHbXM92L5yt%2BeLJk3yb2TBOCCMjCn7cvJBjqkAZcRN04YdbNI5VME2Ra4vHXEAFRWFYMzjnq3sGHOzgJGurDvTz18xiQGredzJVlgXDrsUr%2BwrvzMMhOAAmfSSVzSZ59gadAlZhs%2F1fbiRq4l3AVQvCxlO11S2S%2FHbzhKUS5zzq2zKqmzDcgUQ6EdXJ2ChQERi0ycncYkxwRD5ykGflHuR7WPZnPzvEmQ7v8uu8OKjh5uDgGF1QvIIsh2LGqX%2BVFt&X-Amz-Signature=890f6ef796e90dffca1cb34bf1fa2506a6661d776ad4f62e03a9a3a60bc56036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

