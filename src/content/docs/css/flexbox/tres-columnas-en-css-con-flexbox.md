---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6WC6JU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmRiCsGH6O7oAbgh6besJxALlZniKE9%2BhZtQIWy4NRdQIhANGFC0CmGW4l5qk5Qk2iW2jYtv8rojbFc4gfNSjtCDK4KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9E2h15IF6aNCeYXIq3APiHPr9CnJW4RKdjHl9I6iCcdykcYmR7uusNXdCI8ep5L126UUKdD4wMSBUXoqJ3dSHXwZm0zzrQ1TpPIwONbD75223mBm4211JyyaEDPyi5vOcKY2zpRKdZKlUIDj4SHI%2FGU7xytMiGzxGDLE8iCI3Ga3QyTBsnXliYFt75kYJePOA%2FKyYLIo8Pg1ruJhHM5kGkY25KLUEJNzJT96Tp%2BK7%2BwWyitDRTiWCkkyzDOlvH12faWsxvkdE14XFwKtyXVybufp90ZU%2FlstrBHTsf0qwBoWARjHiO0yBNUkIfCdvPKAILWEmU0X76XR2%2Fs4elaUak6UcOn0jirqsQoj%2BCmQoeRRv8%2Byv8aeCtL1f9dOID68W1f6zS%2Bi4XlbvoB7hFLIc15OpLazlFQJQXBkIityVNl6NYdfa8oIp1xO4Ulncz%2B5tIlLRPyToYrl%2BTpoCYQw9IN9POQKxooMuZbf2ZWWeJLJ5r%2BvcKxiOoIIpm7IpfMc1wHkxTkcsJPUSyGQ4fbonazZSXFeIaK%2FMM5PYsJ54cxmXeeBb8xGAz%2Bwab%2BCLzhMrY11quyQdUbimLj3h7fRz%2FuILZM3z%2Bd1KY15kN6ZFXMxEpl44pNhe9HEXJE7xdJggr0yr%2BB3%2FotqcuzDNmtXJBjqkAXZw23t8dJncZOSTFnHJs8JGxde272AZMoMzv12o7FIzoGPH1%2F2ZuJuaa9Cxz8zf5dUSqP4GeHjLkUIOGzjTmTzZ3pw%2FIqHBimKhXTIXcNnEMt8x7vFtt%2BG11%2F3rSDU1W8fLHe8rbEG8AG1O6E4EsJDmZSvFKaIJQvLWK7Uxg5xAFWEcmqLgfvljVy7E4Hxw98%2FdEFlDvpUJq52kYy7HgFsA6hAb&X-Amz-Signature=98cb57e38d45910e0032ebd5a3ac7cbbf0b7e97b8300e5174b406c81b2fea9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6WC6JU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmRiCsGH6O7oAbgh6besJxALlZniKE9%2BhZtQIWy4NRdQIhANGFC0CmGW4l5qk5Qk2iW2jYtv8rojbFc4gfNSjtCDK4KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9E2h15IF6aNCeYXIq3APiHPr9CnJW4RKdjHl9I6iCcdykcYmR7uusNXdCI8ep5L126UUKdD4wMSBUXoqJ3dSHXwZm0zzrQ1TpPIwONbD75223mBm4211JyyaEDPyi5vOcKY2zpRKdZKlUIDj4SHI%2FGU7xytMiGzxGDLE8iCI3Ga3QyTBsnXliYFt75kYJePOA%2FKyYLIo8Pg1ruJhHM5kGkY25KLUEJNzJT96Tp%2BK7%2BwWyitDRTiWCkkyzDOlvH12faWsxvkdE14XFwKtyXVybufp90ZU%2FlstrBHTsf0qwBoWARjHiO0yBNUkIfCdvPKAILWEmU0X76XR2%2Fs4elaUak6UcOn0jirqsQoj%2BCmQoeRRv8%2Byv8aeCtL1f9dOID68W1f6zS%2Bi4XlbvoB7hFLIc15OpLazlFQJQXBkIityVNl6NYdfa8oIp1xO4Ulncz%2B5tIlLRPyToYrl%2BTpoCYQw9IN9POQKxooMuZbf2ZWWeJLJ5r%2BvcKxiOoIIpm7IpfMc1wHkxTkcsJPUSyGQ4fbonazZSXFeIaK%2FMM5PYsJ54cxmXeeBb8xGAz%2Bwab%2BCLzhMrY11quyQdUbimLj3h7fRz%2FuILZM3z%2Bd1KY15kN6ZFXMxEpl44pNhe9HEXJE7xdJggr0yr%2BB3%2FotqcuzDNmtXJBjqkAXZw23t8dJncZOSTFnHJs8JGxde272AZMoMzv12o7FIzoGPH1%2F2ZuJuaa9Cxz8zf5dUSqP4GeHjLkUIOGzjTmTzZ3pw%2FIqHBimKhXTIXcNnEMt8x7vFtt%2BG11%2F3rSDU1W8fLHe8rbEG8AG1O6E4EsJDmZSvFKaIJQvLWK7Uxg5xAFWEcmqLgfvljVy7E4Hxw98%2FdEFlDvpUJq52kYy7HgFsA6hAb&X-Amz-Signature=b73110d092b7ac49070fff34b1489f553c39b130ff43015ca1b596eafebe5ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

