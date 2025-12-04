---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5ERFD4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC0uZlIJKEPEB%2BqNvcyIQN2MXboowA8ssqSUxLQ7kmDcAIhAJ0pXzWtML%2F8YD7o2NKLA9LdGJatdxVAkcTd6Fbm0XPnKv8DCEYQABoMNjM3NDIzMTgzODA1IgxsCTlCeGkpgza8D0Iq3AMu0xuRo0QZTxLIcrmX1f0t6nggVXb2mWxMl2bvtX%2FA5ZdjY6a7PHE0ubBtSoMfGHSN%2FITbYFmRVhM1PBF7hIhPgICBFKnufBewHep%2FFCXyX4CfpJRQbqQB3n3Pm22lc4G9gViun7HpCcYfiC9wCozwupme%2FTzK8jdWyzMOzya1bGttr1p3yJCyL2txY07tgT6E1o3MIg4sjJXqIlhwy85pa0kgd13IwPCcSKKpdGg5NF%2B%2BPeA1MxtpMUW24GLhAXh6PBBdc53XE6JKq5eaudoTP3duwnkSuzGxH8D8HPUrH08smnsAD%2BTbVuRapkdRMkNXxsbrl1fU7LYl7WYl2XNeAHAPWnL5JPleo3bk5et2fHy%2F6mGTZoBEmla7V90ihEJrEpzQhuCpvOxh4LT2ze07SxFecqoUfQth5a1bA2Wp6VzpFnoe1WbVDGSxLIX%2Fk9i%2B9W2yllCXADzHn%2BxnBaA4dp2V2yz1SvNQbYxTbWh7vZ1TB1r%2Fhf28zYLD98p6oC3UFLvh0pkgx6qAoNlQHF3yNbiY55MSi7AYc4wFYbu4gMnL%2BsrvAb73gMGuQkMlEO6Y7lpZRAw6KRrYAxZ61ZT0tLbfDEG0RA0gZKMTllybSrL5ajPZN4xVSnlPZTDWg8bJBjqkAenHM2s2fkdKU4o3ziGXmwFnKoVy65heeSj3Se18%2FQbDBke1slpkfS1P08QEUaqJ%2Fq9r7WgUC4bzp9KbOcr%2BESLk9TAlXm8oYB5LtWhVNSm9A6U4cANv5SeXspI13M7QbzZqnH5je4G8V6elm9YyWhp1%2FgtJEdxEjK%2BRpbyLBjDg6hMEZZ72EmhX%2B6ai3%2FVxKRemtwnNPRHkrj3vaebpua%2FIwZMU&X-Amz-Signature=6baff09d49d2bc175f3c53cd0f3ac5900ccce309f0b25fa754118de9fb5a6fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5ERFD4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC0uZlIJKEPEB%2BqNvcyIQN2MXboowA8ssqSUxLQ7kmDcAIhAJ0pXzWtML%2F8YD7o2NKLA9LdGJatdxVAkcTd6Fbm0XPnKv8DCEYQABoMNjM3NDIzMTgzODA1IgxsCTlCeGkpgza8D0Iq3AMu0xuRo0QZTxLIcrmX1f0t6nggVXb2mWxMl2bvtX%2FA5ZdjY6a7PHE0ubBtSoMfGHSN%2FITbYFmRVhM1PBF7hIhPgICBFKnufBewHep%2FFCXyX4CfpJRQbqQB3n3Pm22lc4G9gViun7HpCcYfiC9wCozwupme%2FTzK8jdWyzMOzya1bGttr1p3yJCyL2txY07tgT6E1o3MIg4sjJXqIlhwy85pa0kgd13IwPCcSKKpdGg5NF%2B%2BPeA1MxtpMUW24GLhAXh6PBBdc53XE6JKq5eaudoTP3duwnkSuzGxH8D8HPUrH08smnsAD%2BTbVuRapkdRMkNXxsbrl1fU7LYl7WYl2XNeAHAPWnL5JPleo3bk5et2fHy%2F6mGTZoBEmla7V90ihEJrEpzQhuCpvOxh4LT2ze07SxFecqoUfQth5a1bA2Wp6VzpFnoe1WbVDGSxLIX%2Fk9i%2B9W2yllCXADzHn%2BxnBaA4dp2V2yz1SvNQbYxTbWh7vZ1TB1r%2Fhf28zYLD98p6oC3UFLvh0pkgx6qAoNlQHF3yNbiY55MSi7AYc4wFYbu4gMnL%2BsrvAb73gMGuQkMlEO6Y7lpZRAw6KRrYAxZ61ZT0tLbfDEG0RA0gZKMTllybSrL5ajPZN4xVSnlPZTDWg8bJBjqkAenHM2s2fkdKU4o3ziGXmwFnKoVy65heeSj3Se18%2FQbDBke1slpkfS1P08QEUaqJ%2Fq9r7WgUC4bzp9KbOcr%2BESLk9TAlXm8oYB5LtWhVNSm9A6U4cANv5SeXspI13M7QbzZqnH5je4G8V6elm9YyWhp1%2FgtJEdxEjK%2BRpbyLBjDg6hMEZZ72EmhX%2B6ai3%2FVxKRemtwnNPRHkrj3vaebpua%2FIwZMU&X-Amz-Signature=08ead68b98214206794135f4be011279d1b20a159d6d0523b22843c69090ecbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

