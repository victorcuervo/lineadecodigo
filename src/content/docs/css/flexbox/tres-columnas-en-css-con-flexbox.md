---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456FTNPO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDHB2rk55HxmpYTT9t5si14PKoQzyauf2k3heLe%2B7ydUAIgFz1rIJmAOa%2B0fae5CFia6XCj9ZKVGVuNS7TFq4pyNjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDI3Po%2Bz3WATvqM5jzSrcA9wjS513wBz%2BJcqDOviQrBhtbk7grGq2KSfUbECP2vyuWePH4gKt3WzIjMJssr9%2B7%2BiPdPJq8N3vuUx8xB17WcUSYOEaGvnvHZJkeqD6JELg8qMSM1Xtf5g8gaODxqdof%2Bx43AQqWWqIyPSPAkBng3WTBlyju5MRRm%2Bo%2BQZzp521INgTyO9cKwAEbrHeHbvjcE9emzu6OY0sTkfaoRVbbs1dC6C9ldkRRcyGnYNJKcB9oIV6Y8QuskI2nTuwVpSWqTzZCC0VBBxa5NIpLf8iaNEyjm%2Blb1OFT0Kip3S22V70QStBsdr2ilsEP0be4L8%2BHPfMytsO7hLS%2Fifp5mshNYs0ht9mMQ1RmNi0n8npgbIANxxt%2F0RL3eUBsEPlbFEPXOX3yoca6RySerkz9mRvPu7otR1VFjtBKF5uLglQvo%2BVred3itRbsg7N9XWcMJSYM47%2F2qs2VrRWeKJ30eNddOwMzDuE0%2BcJbfbt4oJyVOMFKxtHPK05j9D%2FZtRonZq%2F0TgSylH3nZHYXEIUpGuKyZQHsXljTRMsASvchy02nhWzoIfIn8Y%2B3eoZidPJPXvp5271cczjDilPJ6oxuQYeDMuaWVSClW3R4u2imGQN7BKc%2BaqqMMlhlLpCuKiAMMChxskGOqUBqwrSDXuORjfk4fkASMf045hmqY6cBPIb7VrsHmnTVQ3O8bIw2fSyWj8Egb%2Bi63URDhO0x1fxfYpyjpmPZ0jiarJzmOup5KFAWOjSjvz1h292Knp%2B2sKrq0JOCXZCDeK3ag91nVHj4tEFqLJAeltIyGQhS69lM9zBMZwg9Ea5qEUfQ0bhb1Ijyihr%2BHd9rb82368Ix4DE3t%2FRehZ7nqk%2BlDFt%2B81V&X-Amz-Signature=41e67f1a6f25aba0db47c02f77b263bb01fc2b60a561e0bf62bda7e1a75ca696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456FTNPO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDHB2rk55HxmpYTT9t5si14PKoQzyauf2k3heLe%2B7ydUAIgFz1rIJmAOa%2B0fae5CFia6XCj9ZKVGVuNS7TFq4pyNjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDI3Po%2Bz3WATvqM5jzSrcA9wjS513wBz%2BJcqDOviQrBhtbk7grGq2KSfUbECP2vyuWePH4gKt3WzIjMJssr9%2B7%2BiPdPJq8N3vuUx8xB17WcUSYOEaGvnvHZJkeqD6JELg8qMSM1Xtf5g8gaODxqdof%2Bx43AQqWWqIyPSPAkBng3WTBlyju5MRRm%2Bo%2BQZzp521INgTyO9cKwAEbrHeHbvjcE9emzu6OY0sTkfaoRVbbs1dC6C9ldkRRcyGnYNJKcB9oIV6Y8QuskI2nTuwVpSWqTzZCC0VBBxa5NIpLf8iaNEyjm%2Blb1OFT0Kip3S22V70QStBsdr2ilsEP0be4L8%2BHPfMytsO7hLS%2Fifp5mshNYs0ht9mMQ1RmNi0n8npgbIANxxt%2F0RL3eUBsEPlbFEPXOX3yoca6RySerkz9mRvPu7otR1VFjtBKF5uLglQvo%2BVred3itRbsg7N9XWcMJSYM47%2F2qs2VrRWeKJ30eNddOwMzDuE0%2BcJbfbt4oJyVOMFKxtHPK05j9D%2FZtRonZq%2F0TgSylH3nZHYXEIUpGuKyZQHsXljTRMsASvchy02nhWzoIfIn8Y%2B3eoZidPJPXvp5271cczjDilPJ6oxuQYeDMuaWVSClW3R4u2imGQN7BKc%2BaqqMMlhlLpCuKiAMMChxskGOqUBqwrSDXuORjfk4fkASMf045hmqY6cBPIb7VrsHmnTVQ3O8bIw2fSyWj8Egb%2Bi63URDhO0x1fxfYpyjpmPZ0jiarJzmOup5KFAWOjSjvz1h292Knp%2B2sKrq0JOCXZCDeK3ag91nVHj4tEFqLJAeltIyGQhS69lM9zBMZwg9Ea5qEUfQ0bhb1Ijyihr%2BHd9rb82368Ix4DE3t%2FRehZ7nqk%2BlDFt%2B81V&X-Amz-Signature=02422b9777c778045274ce88dc7d3236694bf0636cbbfbf7b44ab68345c8f1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

