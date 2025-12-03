---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEG5D3DY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCj5gKuxRGBt%2BggDwzTTnXZfrVoMBjGAfxDZYRdvk%2Fr1AIhAMCGIknt%2BB%2FDgytz8I3xrzDsYqFte4Aqv%2BwOPz5rRMwqKv8DCC4QABoMNjM3NDIzMTgzODA1IgxMgC2at0R5UT61okYq3AOo0QrtTrAEgsSkJADr5rWIBX2J9e7diJM1OE1Tu1UfO7gyn7XmfJY1X4Su%2F5iStWycP1xCbDl2bzGYXYxawpGCGNtkuz9IqLw3XCnCUCEn67F1zhbOhylnO4OB3fLosu5qz8YK%2BEzHdiS3uxwIgnYQSnaCw0NQWseb6PqyS9yzqiJK0PE40zoDppDmeJUevTaCZR2cBcos5PtlSKaVZ0k2K7d13fjbhrNio2%2BU8H24mo59BQu%2B1ajWsr3e4RZlFBXGsNjHH8%2FAT4%2FGvGuCO5Tj%2Ff5r%2FhwdpwR3swYbccX1BrK4f8KFsFVSMisJf453XZKzlYlWGZjcfhlK46E1N8ddS0NXdaYrowThE7m57DdJBdWbzkUY3GwWU%2FefX8qec4gQUs1F35gwfXBr0Pm59JZAn3pDKl6ru9RaGU07SW9z%2BktqAkBvoLJeN7qCW2gPOSeroZAiPxBW%2BVi6ly3a%2FlX82srDVX%2BOKuBT5zmfS6njYTSslT9vItzesH7H2PEKhoeW533WaCbK%2B0i05VNR99861l5H6aM2rfJQf56Zh6jK0ny%2FAb5NKqKF1a97WAxRi4vLMG8HpUls%2BlklygqYrorRlKoZ8Y%2BAoVeTV8CDNeXWAoVj08Ecr3JsfMsb9jCw68DJBjqkAaL8XcdZ6s408yxfLsVFXqo%2FqCxVjzm%2FoY0O4xuM1nBtaj6MXgx59Feanqlu2%2BZsylw7BsuOCCVLcGKysjt3uhf1sQcRY3M8wigxSvjSBb9ppWuK%2BPzJWidjQy9W2xm6KK3VrwFh2Ay6Woc6BGcS2rKaIqlS8xGbrpasvbh2CqvDI6%2BhCgwNowspyCehNFNL%2FSCYaJkauqttYr71%2FKOc5903q5RA&X-Amz-Signature=06b113cd38d8843121eb8522f650f95acaa506df2bf1260bbeb4502cf04614b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEG5D3DY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCj5gKuxRGBt%2BggDwzTTnXZfrVoMBjGAfxDZYRdvk%2Fr1AIhAMCGIknt%2BB%2FDgytz8I3xrzDsYqFte4Aqv%2BwOPz5rRMwqKv8DCC4QABoMNjM3NDIzMTgzODA1IgxMgC2at0R5UT61okYq3AOo0QrtTrAEgsSkJADr5rWIBX2J9e7diJM1OE1Tu1UfO7gyn7XmfJY1X4Su%2F5iStWycP1xCbDl2bzGYXYxawpGCGNtkuz9IqLw3XCnCUCEn67F1zhbOhylnO4OB3fLosu5qz8YK%2BEzHdiS3uxwIgnYQSnaCw0NQWseb6PqyS9yzqiJK0PE40zoDppDmeJUevTaCZR2cBcos5PtlSKaVZ0k2K7d13fjbhrNio2%2BU8H24mo59BQu%2B1ajWsr3e4RZlFBXGsNjHH8%2FAT4%2FGvGuCO5Tj%2Ff5r%2FhwdpwR3swYbccX1BrK4f8KFsFVSMisJf453XZKzlYlWGZjcfhlK46E1N8ddS0NXdaYrowThE7m57DdJBdWbzkUY3GwWU%2FefX8qec4gQUs1F35gwfXBr0Pm59JZAn3pDKl6ru9RaGU07SW9z%2BktqAkBvoLJeN7qCW2gPOSeroZAiPxBW%2BVi6ly3a%2FlX82srDVX%2BOKuBT5zmfS6njYTSslT9vItzesH7H2PEKhoeW533WaCbK%2B0i05VNR99861l5H6aM2rfJQf56Zh6jK0ny%2FAb5NKqKF1a97WAxRi4vLMG8HpUls%2BlklygqYrorRlKoZ8Y%2BAoVeTV8CDNeXWAoVj08Ecr3JsfMsb9jCw68DJBjqkAaL8XcdZ6s408yxfLsVFXqo%2FqCxVjzm%2FoY0O4xuM1nBtaj6MXgx59Feanqlu2%2BZsylw7BsuOCCVLcGKysjt3uhf1sQcRY3M8wigxSvjSBb9ppWuK%2BPzJWidjQy9W2xm6KK3VrwFh2Ay6Woc6BGcS2rKaIqlS8xGbrpasvbh2CqvDI6%2BhCgwNowspyCehNFNL%2FSCYaJkauqttYr71%2FKOc5903q5RA&X-Amz-Signature=551918d4b12d8b044e6a9ee742709fefbedfb6ab395a99ef0c286288519da085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

