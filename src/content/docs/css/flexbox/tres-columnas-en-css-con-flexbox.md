---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6AS3Q5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvKoNwXL%2FbGAJ0F7vOjBxkVULmCqNzPWoPm6B3GOmnRgIhAJ1v9%2B47Uk2bkkIOo2slrZbAoGWTcPSJUWHKVev%2Fww2kKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjpRG1xmO00EvTmYsq3ANvEiu%2By0gnu%2BxnHZ66%2Bmbr0fYefoZC4h5QCUx8l2y43Ashmh9vLVG%2FR7qI6W8flzgcW%2BRPutcnpF39I2bBNjzYx8HRhnxJqhKE6sLRNsA4NYGRHN6KuXGFc8i5pFAMgGAbmSZuqi7E73wmDUukLOwFCo5KwxmvmgpfB%2FCqpWitQFQedbN6oKO%2F700JhLG9OYG9mGOPCWZ65TOoqKkKJA22WI0jy2m2RPninwu32ozIt%2FN1cvSDS%2FyxzjUxniznuSTjxWuRgzLXcnn%2Fl45%2BPnfNLk0wyz1mZ71ez4OD3IH5mJOWHurigck5W25CfH2tVwOlkR6v0nAcpxoj4SWkBF2IbQVuJcbAYfhafqFIRN%2BZSURJN1RBY5mkQff9Tkn8wNgNuftihRIshdDXCAkpoQJA7%2FKxOzpZx9DoWsUz3%2B34322hxjWVhpXbScJIkOQUOKJdUHISoOQLGOH%2FVKyCtQ9mDxS6MFGOvsE5xfTBZk3LOPHQXZBVCwxjnWl5lYdGwRS21q0EBTrezAdnzo89OHz6y%2BGUvtV6QIpe8hg3RcAk7kyv%2Fh7V%2BpKhAwR9wu5bHXhW85dsYYluYJEqjM4i8i2Pw4YHGIOcumeRe%2BBrh51gqHQ%2BA9tCFzRYrVH3VzCe7tnJBjqkAZyt8fzgApd3%2BkbEn%2BgfSqBBRDV%2FJ99%2FKrnD9CcC6HmpyyKsP3CKjne%2BKKSQYAcGOAS%2FCH%2B9FeB%2BZj4uZ7JKK33Ayfl8SOiZRiTy0qZOMVwSTPeXu%2B4%2F%2FV%2Fq%2Fe6KXRB%2FmbCYUjXlybNELnrpUY0Y6MZuGbChYG0J5Y0EUgG%2F4LmjJ2HeB3nIybCwRwxTyRWN0bN4DIt45JU05PlKtDADbOREn6RG&X-Amz-Signature=ab80d87281b94e7b30d15844fa51e0b4cf27ccaca2b22a502cef6640f0617cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6AS3Q5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvKoNwXL%2FbGAJ0F7vOjBxkVULmCqNzPWoPm6B3GOmnRgIhAJ1v9%2B47Uk2bkkIOo2slrZbAoGWTcPSJUWHKVev%2Fww2kKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjpRG1xmO00EvTmYsq3ANvEiu%2By0gnu%2BxnHZ66%2Bmbr0fYefoZC4h5QCUx8l2y43Ashmh9vLVG%2FR7qI6W8flzgcW%2BRPutcnpF39I2bBNjzYx8HRhnxJqhKE6sLRNsA4NYGRHN6KuXGFc8i5pFAMgGAbmSZuqi7E73wmDUukLOwFCo5KwxmvmgpfB%2FCqpWitQFQedbN6oKO%2F700JhLG9OYG9mGOPCWZ65TOoqKkKJA22WI0jy2m2RPninwu32ozIt%2FN1cvSDS%2FyxzjUxniznuSTjxWuRgzLXcnn%2Fl45%2BPnfNLk0wyz1mZ71ez4OD3IH5mJOWHurigck5W25CfH2tVwOlkR6v0nAcpxoj4SWkBF2IbQVuJcbAYfhafqFIRN%2BZSURJN1RBY5mkQff9Tkn8wNgNuftihRIshdDXCAkpoQJA7%2FKxOzpZx9DoWsUz3%2B34322hxjWVhpXbScJIkOQUOKJdUHISoOQLGOH%2FVKyCtQ9mDxS6MFGOvsE5xfTBZk3LOPHQXZBVCwxjnWl5lYdGwRS21q0EBTrezAdnzo89OHz6y%2BGUvtV6QIpe8hg3RcAk7kyv%2Fh7V%2BpKhAwR9wu5bHXhW85dsYYluYJEqjM4i8i2Pw4YHGIOcumeRe%2BBrh51gqHQ%2BA9tCFzRYrVH3VzCe7tnJBjqkAZyt8fzgApd3%2BkbEn%2BgfSqBBRDV%2FJ99%2FKrnD9CcC6HmpyyKsP3CKjne%2BKKSQYAcGOAS%2FCH%2B9FeB%2BZj4uZ7JKK33Ayfl8SOiZRiTy0qZOMVwSTPeXu%2B4%2F%2FV%2Fq%2Fe6KXRB%2FmbCYUjXlybNELnrpUY0Y6MZuGbChYG0J5Y0EUgG%2F4LmjJ2HeB3nIybCwRwxTyRWN0bN4DIt45JU05PlKtDADbOREn6RG&X-Amz-Signature=653fd91c678257e4d9347aa474cc5b61345aacba7d584085217f203bc15de430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

