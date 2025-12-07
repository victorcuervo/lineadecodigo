---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KIQ7ZM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw5pn7bI4Wko4ecdw8m1kSFXgP%2Ff3IMAdeR8tUoURzdAiBlqUdipgch63bIjyY82rORTKv6j56BwHWDqaBsmUF1LCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlaJs0%2Bg6ksLMXLHPKtwDJ58QvN6JijOqYZ66oxQJVVsqYzZDrdh2iilTkG3947FajTv47h%2BB%2B%2BZyuqnEiVhoUgmvxmseSppqQvyQ30fORUuYoxLKhudCulj%2BMzlfUi8hnk5OVI1Pqi%2BNvONeutVSTRQgzsEUC2cMwf8g3JUf1KHG5Vkmm8xajAf9OQywY%2BN%2BmSKZSbZDtpFrq3FfRN09TVtWwhgjRNmL4TfAb5WJEQKLBvK87l5SOSwhs9LJuRV6Y9%2Bgpbjh43UoSQ7az1bskxgU2v%2FG2DfJ6f5mpgmxy45VomTGI2ue%2Fwy8C18YE2ZvwbxhFTiOJn1zGQ1jH9h1f%2Byxj0pQz4DkTkORmLrVOD07fS9P4jSIQOfHKz6An0UPJO5Y4FIyiyYgbNiBo5hsjHXCztp3iQ9tPB0KEOc%2B%2B333rpmw6GbvaOKsTYFf43%2B3jPeNvMjm%2BKu3%2FAomR17zGRenprolRKzOWB5m%2BNzkGkz5IsC6X62OGuDQVFM4r3P%2BAjOyezkB5daBD8OKw4l5BtqsPPydkXanHEWbxi3imgnwfOfkgLnxIKHdRb19XVlPOoFsvV20sPepbScrHjdwOlPqMTYaN6Lgjwt3Ab13DLBFFsaV4LzuBAYbU%2FQMr%2Fop76YQodFbarBdjPEwkZ3UyQY6pgHVfdc%2BJPOYJkIulF0NkXs7aNEwu0XY5dzxxjwiBQYOtU%2FK0pHsck46RV2B7YVtGadak0FnWMNFWm7iKifK3v5MUzAOvOzqmjw%2FK4qlEHbb498fOJgGEKE7ys%2FHe%2FcTxctiNsC%2BNkL%2F5TWPaxrIABLMEIQ7efWkIfqpWTyR6ppk8Nv3AY%2BC80Dq7AwgImeTR0MnvVWjuhR3FGLQhRJGq3IHAgysgrD4&X-Amz-Signature=f8982e1e04d6a8f855bdeeb2f5327a40ec681eda11e86b7376770ab9949aebd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KIQ7ZM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw5pn7bI4Wko4ecdw8m1kSFXgP%2Ff3IMAdeR8tUoURzdAiBlqUdipgch63bIjyY82rORTKv6j56BwHWDqaBsmUF1LCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlaJs0%2Bg6ksLMXLHPKtwDJ58QvN6JijOqYZ66oxQJVVsqYzZDrdh2iilTkG3947FajTv47h%2BB%2B%2BZyuqnEiVhoUgmvxmseSppqQvyQ30fORUuYoxLKhudCulj%2BMzlfUi8hnk5OVI1Pqi%2BNvONeutVSTRQgzsEUC2cMwf8g3JUf1KHG5Vkmm8xajAf9OQywY%2BN%2BmSKZSbZDtpFrq3FfRN09TVtWwhgjRNmL4TfAb5WJEQKLBvK87l5SOSwhs9LJuRV6Y9%2Bgpbjh43UoSQ7az1bskxgU2v%2FG2DfJ6f5mpgmxy45VomTGI2ue%2Fwy8C18YE2ZvwbxhFTiOJn1zGQ1jH9h1f%2Byxj0pQz4DkTkORmLrVOD07fS9P4jSIQOfHKz6An0UPJO5Y4FIyiyYgbNiBo5hsjHXCztp3iQ9tPB0KEOc%2B%2B333rpmw6GbvaOKsTYFf43%2B3jPeNvMjm%2BKu3%2FAomR17zGRenprolRKzOWB5m%2BNzkGkz5IsC6X62OGuDQVFM4r3P%2BAjOyezkB5daBD8OKw4l5BtqsPPydkXanHEWbxi3imgnwfOfkgLnxIKHdRb19XVlPOoFsvV20sPepbScrHjdwOlPqMTYaN6Lgjwt3Ab13DLBFFsaV4LzuBAYbU%2FQMr%2Fop76YQodFbarBdjPEwkZ3UyQY6pgHVfdc%2BJPOYJkIulF0NkXs7aNEwu0XY5dzxxjwiBQYOtU%2FK0pHsck46RV2B7YVtGadak0FnWMNFWm7iKifK3v5MUzAOvOzqmjw%2FK4qlEHbb498fOJgGEKE7ys%2FHe%2FcTxctiNsC%2BNkL%2F5TWPaxrIABLMEIQ7efWkIfqpWTyR6ppk8Nv3AY%2BC80Dq7AwgImeTR0MnvVWjuhR3FGLQhRJGq3IHAgysgrD4&X-Amz-Signature=f98ea7a32b8f549f66c40e0a6744e1e6d195a98db554b7354bf22fec16f0453c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

