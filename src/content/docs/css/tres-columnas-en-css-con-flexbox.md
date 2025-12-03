---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXBVTMD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC6ndZsESYOBgkfRWlSkB4q1HfhJeeF0zm2MobcpOeTqQIhAPiZ%2FQ4msOoh6D6AUVl4KM9JK7WBlPIA2d6OQNBmiWIIKv8DCDQQABoMNjM3NDIzMTgzODA1Igzp1bzdmQDawsHdCX0q3AOh2j6%2Be9Gzjwn1%2B80jidyrlhggDWCPAtQ8cUB%2BrChoALTMAFdrnDkbL6lWMYsv81MEFwX3ZCUzW0anfoO3vzVeIY%2FsSmQFZFQw0oAC0vdqwCxUHkvFbTCcWaC8%2Fkfcnh6C7gM4mNxXD%2FEj5ypXIGUpz%2B2bGMbYMqnVGWLNoDgJB1Kw1Qz7EID1b1hFyb9eRoVzVkCgMsurl0UJu3cUrteOKSr15%2BxMVuBTeYI19%2FTEcxfvLWXC8Ij7Xfb4RlnWAiFrmUnVKNCABaa%2FnYpKmnkvHfH6fIU0r8Za1nsaBEVDyR843yXdfZZsenE%2FM5Oc96fMWGVZ8Kf1mb63wPnEyQyOtdp%2Bl8%2FhiCG%2BQN8n040g%2Foysw4Gsl4sOcAxdTz5vzVATy7y609yZo6d%2B9JTOQkIlsUh3LVTsRx4auL1qDI%2FdTKucT5Ar5gqArAMcCcjfJLpd%2BueAm0fjRF1h%2F8YTXXiImEDoN%2B3vJbZY1RRfuTHDAMYMBl0hfL8BPGNbxpo4LHyH8aQ08f8XPl7wCFo%2BHFzM%2FwEtSDrahjfd5bs3EepRROfj%2Bwq3H35ebEYEBmbi7WuSh5qRSubzF8nkFDy6wSJLdlwCIguWIhXrKmURep8rnyRMdUlcoH%2FBdSNb5zCykcLJBjqkAbKtyfP78Uy4TqXCCzDewLBDsSDI0NCjEfPs5QgE3lA8jAdmcZsEMiI%2FyJ0ogsPPsljCgnToXrShWKQ95Tf8eylJDo96j1h%2F4kd71Y2%2FnfQt4iRZjqGTRWAX9saoAQwIalMpND7RjUxG3lOXyx2AeQlhH9cum6qkGwYURC0OU2NOYBP5TpH0%2BSTP4igzwey4cQCKJF3RRG%2BoGQI3ZJLw%2FARjA4NF&X-Amz-Signature=04065ae2515fbee1bf85638f1d7a5aa337e30bb14a2cdc7898c31561bc3ca893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXBVTMD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC6ndZsESYOBgkfRWlSkB4q1HfhJeeF0zm2MobcpOeTqQIhAPiZ%2FQ4msOoh6D6AUVl4KM9JK7WBlPIA2d6OQNBmiWIIKv8DCDQQABoMNjM3NDIzMTgzODA1Igzp1bzdmQDawsHdCX0q3AOh2j6%2Be9Gzjwn1%2B80jidyrlhggDWCPAtQ8cUB%2BrChoALTMAFdrnDkbL6lWMYsv81MEFwX3ZCUzW0anfoO3vzVeIY%2FsSmQFZFQw0oAC0vdqwCxUHkvFbTCcWaC8%2Fkfcnh6C7gM4mNxXD%2FEj5ypXIGUpz%2B2bGMbYMqnVGWLNoDgJB1Kw1Qz7EID1b1hFyb9eRoVzVkCgMsurl0UJu3cUrteOKSr15%2BxMVuBTeYI19%2FTEcxfvLWXC8Ij7Xfb4RlnWAiFrmUnVKNCABaa%2FnYpKmnkvHfH6fIU0r8Za1nsaBEVDyR843yXdfZZsenE%2FM5Oc96fMWGVZ8Kf1mb63wPnEyQyOtdp%2Bl8%2FhiCG%2BQN8n040g%2Foysw4Gsl4sOcAxdTz5vzVATy7y609yZo6d%2B9JTOQkIlsUh3LVTsRx4auL1qDI%2FdTKucT5Ar5gqArAMcCcjfJLpd%2BueAm0fjRF1h%2F8YTXXiImEDoN%2B3vJbZY1RRfuTHDAMYMBl0hfL8BPGNbxpo4LHyH8aQ08f8XPl7wCFo%2BHFzM%2FwEtSDrahjfd5bs3EepRROfj%2Bwq3H35ebEYEBmbi7WuSh5qRSubzF8nkFDy6wSJLdlwCIguWIhXrKmURep8rnyRMdUlcoH%2FBdSNb5zCykcLJBjqkAbKtyfP78Uy4TqXCCzDewLBDsSDI0NCjEfPs5QgE3lA8jAdmcZsEMiI%2FyJ0ogsPPsljCgnToXrShWKQ95Tf8eylJDo96j1h%2F4kd71Y2%2FnfQt4iRZjqGTRWAX9saoAQwIalMpND7RjUxG3lOXyx2AeQlhH9cum6qkGwYURC0OU2NOYBP5TpH0%2BSTP4igzwey4cQCKJF3RRG%2BoGQI3ZJLw%2FARjA4NF&X-Amz-Signature=c1d4d8785b4dbb197774333eb8f1f998ea432b15e9231923a40cd5c5dea413b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

