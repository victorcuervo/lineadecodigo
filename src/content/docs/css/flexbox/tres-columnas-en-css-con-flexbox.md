---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4UGF3O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVqPEA0Y6HiUGbLimJ%2BkqsI2SSX%2F7tR9d0ApNbwNSAAIhAOyRg1qcb3F9OZ4oC9b9OqAh1ywv7bBNCSoWvmeH5IS3Kv8DCGAQABoMNjM3NDIzMTgzODA1IgyQCdVZf8XMy%2Fc1ktgq3AMGB5d4wvl0rww7fVhUGkMk%2F865BVavRbd%2FQbx4rPpVrq6eg7kSRknEuDzAOWzrZDia5XGZgYWR7yj1ySeLlO2TGDG%2BSmd7kzVFvSRQJxruvGO0duQmSUbHig2Mopj8lZz2jM2XbjFDE0r8TGuMKT0GcT4ePVQHuFvaMXAVDxRHSWFKwaYOmYUFaxwdmK5RR9uV2vhjfSDez403Tyu55lc9A1FGJY9iOVM57qQnU8hy%2FfTxkdt3x3uZbOILxMZOVLJNx3GgA1kQurJqc%2BC6KE%2BaeJcbTZSgGTnVe%2FDhijn93MxZBCCWoHgf92vQz07iFptUsZ0luyVCdIdJtbOeuC9MV%2BFQzEg8eo8cXzChtSKp908yrAeNUp2S5Y8fs3Ex7uLQ5RBiiFdcBo2EyHgpoVC1qPQKxPXVjNWLgRSxPHR3cVjN2bmZJeMzwrofAweTJLJClO3HdSHUogb2MUjz5grw2oPLHdOoLHSdVQlP4IU53RZqNXGfwNS9%2B4IgeaZMsdAN6kPRd7t7uzhnsR5aCnhuZiTnSrZ%2FZHoEMOaeeB2qFu7oKw17Nl9VDwSGI82nzUxqAJDFvRJvX88Hcx8TmHzQC2ptwlLdgDR8gYsQpT0qPGs3pemfzOY3Jd4yQDDo88vJBjqkARAVjkelLBNg4wb5Ye7PFnfobZLlv%2FHQ%2BJaobjiw5BqitbP27hsvU2U%2Fxgoy70yUC2VHvUYT9Qg%2Bg11Ob5V26VQlKGfeqfekOoDLFBPT0iYa%2FTDIRIvdYbrUQ58oVFjp%2Fnot5la7u07XlrPcdaQKRJSFEuZsHA0aBlg6C3R3O0V%2BQHEoh7LpuKfD7t3yScG6I7PY7Pr3j46MYMXAuAzXYc7cDqAy&X-Amz-Signature=244cb59611aff0513489f6af31d85f1ca7ca90bcbe6c9f4e9014e8f871afb203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4UGF3O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVqPEA0Y6HiUGbLimJ%2BkqsI2SSX%2F7tR9d0ApNbwNSAAIhAOyRg1qcb3F9OZ4oC9b9OqAh1ywv7bBNCSoWvmeH5IS3Kv8DCGAQABoMNjM3NDIzMTgzODA1IgyQCdVZf8XMy%2Fc1ktgq3AMGB5d4wvl0rww7fVhUGkMk%2F865BVavRbd%2FQbx4rPpVrq6eg7kSRknEuDzAOWzrZDia5XGZgYWR7yj1ySeLlO2TGDG%2BSmd7kzVFvSRQJxruvGO0duQmSUbHig2Mopj8lZz2jM2XbjFDE0r8TGuMKT0GcT4ePVQHuFvaMXAVDxRHSWFKwaYOmYUFaxwdmK5RR9uV2vhjfSDez403Tyu55lc9A1FGJY9iOVM57qQnU8hy%2FfTxkdt3x3uZbOILxMZOVLJNx3GgA1kQurJqc%2BC6KE%2BaeJcbTZSgGTnVe%2FDhijn93MxZBCCWoHgf92vQz07iFptUsZ0luyVCdIdJtbOeuC9MV%2BFQzEg8eo8cXzChtSKp908yrAeNUp2S5Y8fs3Ex7uLQ5RBiiFdcBo2EyHgpoVC1qPQKxPXVjNWLgRSxPHR3cVjN2bmZJeMzwrofAweTJLJClO3HdSHUogb2MUjz5grw2oPLHdOoLHSdVQlP4IU53RZqNXGfwNS9%2B4IgeaZMsdAN6kPRd7t7uzhnsR5aCnhuZiTnSrZ%2FZHoEMOaeeB2qFu7oKw17Nl9VDwSGI82nzUxqAJDFvRJvX88Hcx8TmHzQC2ptwlLdgDR8gYsQpT0qPGs3pemfzOY3Jd4yQDDo88vJBjqkARAVjkelLBNg4wb5Ye7PFnfobZLlv%2FHQ%2BJaobjiw5BqitbP27hsvU2U%2Fxgoy70yUC2VHvUYT9Qg%2Bg11Ob5V26VQlKGfeqfekOoDLFBPT0iYa%2FTDIRIvdYbrUQ58oVFjp%2Fnot5la7u07XlrPcdaQKRJSFEuZsHA0aBlg6C3R3O0V%2BQHEoh7LpuKfD7t3yScG6I7PY7Pr3j46MYMXAuAzXYc7cDqAy&X-Amz-Signature=11c3c0238cdc73538aa6318028837cc5024a9ae0db4eca874512be962a9db3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

