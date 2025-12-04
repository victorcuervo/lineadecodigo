---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNMPKDDI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCuoN7wWidlUuLlx4wx7uojn9YHbfJlfEhgmshteMRnWQIhAMZbvmM8Oz35RzhI7xjIDkno2BD%2BeogufvcKR%2Fy3KD2lKv8DCD4QABoMNjM3NDIzMTgzODA1Igyi%2BAeFdNulQogch90q3AN9ayf9Ai08TP3w41QkLoOhe7fRKZ%2FfoxWJNb38RCMhLtOvmKraY9%2ByFovD2pvi02l%2BvrS14Fr0F59EHrSRGu4MXyVzvxYhiXviaHeAwlXBVq4cYkFnVEHL%2BcaUWNHR2PW%2BvmW3zFDpptXJvf2Q%2BV8qPwY2rGZz9YokfGqZ7vyR65rfixpShw0YRNkhqfeGTIpUCNGjdGfrf1NycQ1XeT6dXYfcmJiDc8PnZmdPBMHq51e7jI6ERrNrPlG7AEEiLrSgUPOXhbQOTF4GXTdbIB9smQ2earFUoCUMYwjpALA48MyFOw8uY1z8Ir%2FuW%2Ft16Hkc4cWkqz45uMUo10KdRizzs9S7AZFplELUqXtk5%2Fy9EZl5rgy1nMoGYISEKkHnV17us9eYGBlUznU8uDe0ESEMlk%2FqysOyLepj04btJ4D79iZUTbGbkkAHV%2Fu4yPDfpx2aT97IfIxru3RaONO6E7O4OU%2FAGrbsF31pTFm0TjAVM%2Bxf8ZJJ6EcUi6%2BDGweF2RvyT2jPw9RCF8fRHsmOpmi6NqP4UdjsrUzCvz5D0HnbaGeV42IeFYeyQRtMnfc8WxQpIX8ubzbVbuocWG0cXKBH31mKsaoDq6eXzrDw2ThgULeJpdlp0CC%2Bd%2FCzvDC2rsTJBjqkAXDQqeCz%2Bw4L7J29zt00lrqB2cGV%2BdcUT23PeaY5XEH0jqZMcy47antCNf116P7ug%2BFLbEilFWbHUGZosxfOVRF%2BLdOptOr0kjUTuVCf3bQ8XiisqXVwLjoiwFXO7n7IMgp7McnH2jgHA5Xh00MzSBBIHmHcjMLdv7d1SYaJ6EbnHZjjveroQNL%2FyTGqjJX%2Bt2wK7FcCIMVxNxjBZbGhyCLQyArA&X-Amz-Signature=88a65e89e4a9fd914c9b9e5f5bbced8751eb9bf835530912bcc64931e4c2ac7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNMPKDDI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCuoN7wWidlUuLlx4wx7uojn9YHbfJlfEhgmshteMRnWQIhAMZbvmM8Oz35RzhI7xjIDkno2BD%2BeogufvcKR%2Fy3KD2lKv8DCD4QABoMNjM3NDIzMTgzODA1Igyi%2BAeFdNulQogch90q3AN9ayf9Ai08TP3w41QkLoOhe7fRKZ%2FfoxWJNb38RCMhLtOvmKraY9%2ByFovD2pvi02l%2BvrS14Fr0F59EHrSRGu4MXyVzvxYhiXviaHeAwlXBVq4cYkFnVEHL%2BcaUWNHR2PW%2BvmW3zFDpptXJvf2Q%2BV8qPwY2rGZz9YokfGqZ7vyR65rfixpShw0YRNkhqfeGTIpUCNGjdGfrf1NycQ1XeT6dXYfcmJiDc8PnZmdPBMHq51e7jI6ERrNrPlG7AEEiLrSgUPOXhbQOTF4GXTdbIB9smQ2earFUoCUMYwjpALA48MyFOw8uY1z8Ir%2FuW%2Ft16Hkc4cWkqz45uMUo10KdRizzs9S7AZFplELUqXtk5%2Fy9EZl5rgy1nMoGYISEKkHnV17us9eYGBlUznU8uDe0ESEMlk%2FqysOyLepj04btJ4D79iZUTbGbkkAHV%2Fu4yPDfpx2aT97IfIxru3RaONO6E7O4OU%2FAGrbsF31pTFm0TjAVM%2Bxf8ZJJ6EcUi6%2BDGweF2RvyT2jPw9RCF8fRHsmOpmi6NqP4UdjsrUzCvz5D0HnbaGeV42IeFYeyQRtMnfc8WxQpIX8ubzbVbuocWG0cXKBH31mKsaoDq6eXzrDw2ThgULeJpdlp0CC%2Bd%2FCzvDC2rsTJBjqkAXDQqeCz%2Bw4L7J29zt00lrqB2cGV%2BdcUT23PeaY5XEH0jqZMcy47antCNf116P7ug%2BFLbEilFWbHUGZosxfOVRF%2BLdOptOr0kjUTuVCf3bQ8XiisqXVwLjoiwFXO7n7IMgp7McnH2jgHA5Xh00MzSBBIHmHcjMLdv7d1SYaJ6EbnHZjjveroQNL%2FyTGqjJX%2Bt2wK7FcCIMVxNxjBZbGhyCLQyArA&X-Amz-Signature=4faa8b9b2ec65e05198ef411a412d66552f15f5737dcb46f7c0be382dcb562eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

